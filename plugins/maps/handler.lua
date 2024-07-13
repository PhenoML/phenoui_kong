local cwm = (...):match('(.-)[^%.]+$')

local MAPS = {
  VERSION = '0.0.1',
  PRIORITY = 1100,
  -- cache the configuration for each configuration
  configs = {}
}

function dump(o)
    if type(o) == 'table' then
        local s = '{ '
        for k,v in pairs(o) do
            if type(k) ~= 'number' then k = '"'..k..'"' end
            s = s .. '['..k..'] = ' .. dump(v) .. ','
        end
        return s .. '} '
    else
        return tostring(o)
    end
end

---@param configs any[]
function MAPS:configure(configs)
    for i, config in ipairs(configs) do
        local result = {
            request_config = nil,
            response_config = nil,
        }

        if config.request_config then
            local f = io.open(config.request_config, 'r')
            if f then
                print('saving request_config')
                result.request_config = f:read('*a')
                io.close(f)
            end
        end

        if config.response_config then
            local f = io.open(config.response_config, 'r')
            if f then
                print('saving response_config')
                result.response_config = f:read('*a')
                io.close(f)
            end
        end

        self.configs[config["__key__"]] = result
    end
end

return MAPS