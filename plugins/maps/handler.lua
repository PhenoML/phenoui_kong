-- A ton of this code was inspired by:
-- https://github.com/Kong/kong-plugin/blob/master/kong/plugins/myplugin/handler.lua
local cwm = (...):match('(.-)[^%.]+$')
local MAPS = require(cwm .. 'MAPS')
local MAPSKongExtensions = require(cwm .. 'MAPSKongExtensions')
local url = require 'net.url'
local Parser = require('lua-jmespath.Parser').Parser
local cjson = require('cjson.safe').new()
local gzip = require('kong.tools.gzip')

function dump_table(o)
    if type(o) == 'table' then
        local s = '{ '
        for k,v in pairs(o) do
            if type(k) ~= 'number' then k = '"'..k..'"' end
            s = s .. '['..k..'] = ' .. dump_table(v) .. ','
        end
        return s .. '} '
    else
        return tostring(o)
    end
end

cjson.decode_array_with_array_mt(true)
local cjson_decode = cjson.decode
local cjson_encode = cjson.encode

local req_get_body_data = ngx.req.get_body_data
local req_read_body = ngx.req.read_body
local gmatch = string.gmatch
local MAPSPlugin = {
    PRIORITY = 809,
    VERSION = '0.0.1',
    -- cache the configuration for each configuration
    configs = {},
}

function read_json_body(body)
    if body and body ~= '' then
        local status, res = pcall(cjson_decode, body)

        if status then
            return res
        end

        kong.log.err(string.format('\nError while decoding body :: %s\n', res))
        return nil

    end
    return {}
end

function parse_jpath_file(file)
    local f = io.open(file, 'r')
    if f then
        local status, result = pcall(Parser.parse, Parser, f:read('*a'))
        io.close(f)
        if not status then
            kong.log.err(string.format('\nError while parsing file :: %s :: %s\n', file, result))
            return nil
        end
        return result
    else
        kong.log.err(string.format('\nError while opening file :: %s\n', file))
    end
    return nil
end

function run_maps_search(maps, query, obj)
    local status, result = pcall(maps.search, maps, query, obj)
    if not status then
        kong.log.err(string.format('\nError while running maps search :: %s\n', result))
        return nil
    end
    return result
end

---@param configs any[]
function MAPSPlugin:configure(configs)
    self.maps = MAPS.MAPSTreeInterpreter:new(MAPSKongExtensions)
    for _, config in ipairs(configs) do
        local result = {
            target_route = Parser:parse(config.target_route),
            method = config.method,
            headers_transform = nil,
            query_transform = nil,
            request_transform = nil,
            response_transform = nil,
        }

        if config.headers_transform then
            kong.log.debug(string.format('\nParsing headers transform :: %s\n', config.headers_transform))
            result.headers_transform = parse_jpath_file(config.headers_transform)
        end

        if config.query_transform then
            kong.log.debug(string.format('\nParsing query transform :: %s\n', config.query_transform))
            result.query_transform = parse_jpath_file(config.query_transform)
        end

        if config.request_transform then
            kong.log.debug(string.format('\nParsing request transform :: %s\n', config.request_transform))
            result.request_transform = parse_jpath_file(config.request_transform)
        end

        if config.response_transform then
            kong.log.debug(string.format('\nParsing response transform :: %s\n', config.response_transform))
            result.response_transform = parse_jpath_file(config.response_transform)
        end

        self.configs[config['__key__']] = result
    end
end

function MAPSPlugin:access(config)
    kong.log.debug(string.format('\nMAPSPlugin:access with config :: %s\n', config['__key__']))
    local maps_config = self.configs[config['__key__']]

    local body = {}
    req_read_body()
    local string_body = req_get_body_data()
    if string_body then
        body = read_json_body(string_body)
    end

    local headers = kong.request.get_headers()
    local query = url.parseQuery(ngx.unescape_uri(kong.request.get_raw_query()))
    local context = {
        headers = headers,
        query = query,
        body = body,
    }

    local maps = self.maps

    local path = run_maps_search(maps, maps_config.target_route, context);
    kong.service.request.set_path(path);
    kong.service.request.set_method(maps_config.method);

    if maps_config.headers_transform then
        local transformed_headers = run_maps_search(maps, maps_config.headers_transform, context);
        kong.service.request.set_headers(transformed_headers);
    end

    if maps_config.query_transform then
        local transformed_query = run_maps_search(maps, maps_config.query_transform, context);
        if transformed_query then
            kong.service.request.set_raw_query(url.buildQuery(transformed_query));
        end
    end

    if maps_config.request_transform then
        local transformed_body = run_maps_search(maps, maps_config.request_transform, context);
        string_body = cjson_encode(transformed_body);
        kong.service.request.set_raw_body(string_body);
    end

    if maps_config.method == 'POST' then
        kong.service.request.set_header('Content-Length', #string_body);
    end

    if maps_config.response_transform then
        ngx.ctx.buffer = ''
    end
end

function MAPSPlugin:header_filter(config)
    kong.log.debug(string.format('\nMAPSPlugin:header_filter with config :: %s\n', config['__key__']))
    local maps_config = self.configs[config['__key__']]
    if maps_config.response_transform then
        kong.log.debug('\nSetting content-length to nil\n')
        ngx.header['content-length'] = nil -- this needs to be for the content-length to be recalculated
    end
end

function MAPSPlugin:body_filter(config)
    kong.log.debug(string.format('\nMAPSPlugin:body_filter with config :: %s\n', config['__key__']))
    local maps_config = self.configs[config['__key__']]

    if maps_config.response_transform == nil then
        kong.log.debug('\nNo response transform configured. Not applying any transformations.\n')
        return
    end

    if kong.response.get_source() ~= 'service' then
        kong.log.debug('\nResponse is from kong itself or an error occurred. Not applying any transformations.\n')
        return
    end

    local cache_response = kong.ctx.shared.proxy_cache_hit
    if cache_response ~= nil then
        -- No need to do anything. Cache response is already transformed.
        kong.log.debug('\nCache response raw body\n')
        return
    end

    local chunk, eof = ngx.arg[1], ngx.arg[2]
    if not eof then
        -- sometimes the data comes in chunks and every chunk is a different call
        -- so we will buffer the chunks in the context
        if ngx.ctx.buffer and chunk then
            ngx.ctx.buffer = ngx.ctx.buffer .. chunk
        end
        ngx.arg[1] = nil
    else
        -- body is fully read
        local headers = kong.service.response.get_headers()
        local raw_body = ngx.ctx.buffer
        local body = nil

        local content_type = headers['Content-Type']
        if content_type == nil then
            content_type = 'unknown'
        end

        local content_encoding = headers['Content-Encoding']
        if content_encoding == 'gzip' then
            kong.log.debug('\nBody is gzipped. Inflating it.\n')
            local res, err = gzip.inflate_gzip(raw_body)
            if err then
                kong.log.err(string.format('\nError while inflating body :: %s\n', err))
                return kong.service.response.error(ngx.HTTP_INTERNAL_SERVER_ERROR)
            end
            raw_body = res
        end

        if not gmatch(content_type, '(application/json)')() then
            kong.log.warn(string.format('\nContent type is not JSON. Trying to parse as JSON anyway (could result in 500) :: %s\n', content_type))
        end

        body = read_json_body(raw_body)
        if body == nil then
            return kong.service.response.error(ngx.HTTP_INTERNAL_SERVER_ERROR)
        end
        local query = url.parseQuery(ngx.unescape_uri(kong.request.get_raw_query()))
        local context = {
            headers = headers,
            query = query,
            body = body,
        }

        local maps = self.maps
        local transformed_body = run_maps_search(maps, maps_config.response_transform, context)
        transformed_body = cjson_encode(transformed_body)

        if content_encoding == 'gzip' then
            kong.log.debug('\nBody is gzipped. Deflating it.\n')
            local res, err = gzip.deflate_gzip(transformed_body)
            if err then
                kong.log.err(string.format('\nError while deflating body :: %s\n', err))
                return kong.service.response.error(ngx.HTTP_INTERNAL_SERVER_ERROR)
            end
            transformed_body = res
        end

        ngx.arg[1] = transformed_body
    end
end

return MAPSPlugin
