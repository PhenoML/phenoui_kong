local jmespath = require('lua-jmespath') -- required to patch table.unpack
local Runtime = require('lua-jmespath.Runtime').Runtime
local TreeInterpreter = require('lua-jmespath.TreeInterpreter').TreeInterpreter
local Parser = require('lua-jmespath.Parser').Parser

Class = {}
function Class:new(super)
    local class, metatable, properties = {}, {}, {}
    class.metatable = metatable
    class.properties = properties

    function metatable:__index(key)
        local prop = properties[key]
        if prop then
            return prop.get(self)
        elseif class[key] ~= nil then
            return class[key]
        elseif super and super.metatable then
            return super.metatable.__index(self, key)
        elseif super and super.prototype then
            return super.prototype[key]
        else
            return nil
        end
    end

    function metatable:__newindex(key, value)
        local prop = properties[key]
        if prop then
            return prop.set(self, value)
        elseif super and super.metatable then
            return super.metatable.__newindex(self, key, value)
        else
            rawset(self, key, value)
        end
    end

    function class:new(...)
        local obj = setmetatable({}, self.metatable)
        if obj.__new then
            obj:__new(...)
        end
        return obj
    end

    return class
end

local MAPSRuntime = Class:new(Runtime)

function MAPSRuntime:__new(interpreter, functionMap)
    Runtime.prototype.____constructor(self, interpreter)
    self.mapsFunctionMap = functionMap
end

function MAPSRuntime:callFunction(name, args)
    if type(self.mapsFunctionMap[name]) == 'function' then
        return self.mapsFunctionMap[name](self, table.unpack(args))
    end
    return Runtime.prototype.callFunction(self, name, args)
end

local MAPSTreeInterpreter = Class:new(TreeInterpreter)

function MAPSTreeInterpreter:__new(functionMap)
    TreeInterpreter.prototype.____constructor(self)
    self.runtime = MAPSRuntime:new(self, functionMap)
end

function MAPSTreeInterpreter:executeMaps(config, value)
    local nodeTree = Parser:parse(config)
    return self:search(nodeTree, value)
end

return {
    MAPSTreeInterpreter = MAPSTreeInterpreter,
    MAPSRuntime = MAPSRuntime,
}
