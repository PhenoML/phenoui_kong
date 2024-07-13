local typedefs = require "kong.db.schema.typedefs"

return {
    name = "phenoui_maps",
    fields = {
        { consumer = typedefs.no_consumer, },
        {
            config = {
                type = "record",
                fields = {
                    { request_config = { type = "string", required = false }, },
                    { response_config = { type = "string", required = false }, },
                }
            }
        }
    },
}