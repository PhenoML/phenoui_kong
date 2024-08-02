local typedefs = require 'kong.db.schema.typedefs'

local schema = {
    name = 'pheno_ui_maps',
    fields = {
        { consumer = typedefs.no_consumer, },
        {
            config = {
                type = 'record',
                fields = {
                    { target_route = { type = 'string', required = true } },
                    { method = { type = 'string', required = true } },
                    -- all transformations run on the body data structure, but can fetch headers and query params
                    -- via functions, for an object with all headers call `headers()` and for a specific header
                    -- call `header('key')`, for an object with all query params call `query()` and for a specific
                    -- query param call `query('key')`
                    { headers_transform = { type = 'string', required = false } },
                    { query_transform = { type = 'string', required = false } },
                    { request_transform = { type = 'string', required = false } },
                    { response_transform = { type = 'string', required = false } },
            },
        },
    },
    },
}

return schema