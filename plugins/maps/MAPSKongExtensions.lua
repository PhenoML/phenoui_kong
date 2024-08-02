local cjson = require('cjson')

local MAPSKongExtensions = {}

function MAPSKongExtensions:isoDateNow()
    return os.date("!%Y-%m-%dT%TZ")
end

function MAPSKongExtensions:encodeJson(obj)
    return cjson.encode(obj)
end

function MAPSKongExtensions:decodeJson(str)
    return cjson.decode(str)
end

function MAPSKongExtensions:randomInt(min, max)
    return math.random(min, max)
end

function MAPSKongExtensions:byKey(key, obj, default)
    return obj[key] or default
end

function MAPSKongExtensions:split(splitter, str)
    if not str or str == cjson.null or str == '' then
        return cjson.null
    end

    local result = setmetatable({}, cjson.array_mt)
    for token in string.gmatch(str, "[^" .. splitter .. "]+") do
        table.insert(result, token)
    end
    return result
end

function MAPSKongExtensions:env(key)
    return os.getenv(key)
end

function MAPSKongExtensions:concat(...)
    local result = ''
    for _, v in ipairs({...}) do
        result = result .. tostring(v)
    end
    return result
end

return MAPSKongExtensions

