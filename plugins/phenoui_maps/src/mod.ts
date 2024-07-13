import * as jmespath from 'https://deno.land/x/jmespath@v0.2.2/index.ts';
import Kong from 'https://raw.githubusercontent.com/Kong/kong-js-pdk/master/kong/index.d.ts';
import fs from 'node:fs';
import qs from 'npm:qs';
// const fs = require('node:fs');

type MAPSConfig = {
    target_route: string;
    method: string;
    query_override?: string;
    request_transform?: string;
    response_transform?: string;
}

class PhenoUI_MAPS {
    public config: MAPSConfig;
    constructor(config: MAPSConfig) {
        if (config.query_override) {
            config.query_override = fs.readFileSync(config.query_override, {encoding: 'utf8'});
        }

        if (config.request_transform) {
            config.request_transform = fs.readFileSync(config.request_transform, {encoding: 'utf8'});
        }

        if (config.response_transform) {
            config.response_transform = fs.readFileSync(config.response_transform, {encoding: 'utf8'});
        }

        this.config = config;
    }
    async access(kong: Kong) {
        // override the target route and method
        await kong.service.request.set_path(this.config.target_route);
        await kong.service.request.set_method(this.config.method);

        // if the request transform is set of the query override is set, load the body
        if (this.config.request_transform || this.config.query_override) {
            const rawBody = await kong.request.get_raw_body();
            let body;
            try {
                body = JSON.parse(rawBody);
            } catch (e) {
                kong.log.notice(`Failed to parse body: ${e}`);
                body = {};
            }
            // if the request transform is set, transform the body
            if (this.config.request_transform) {
                body = jmespath.search(body, this.config.request_transform);
                await kong.service.request.set_raw_body(JSON.stringify(body));
            }
            // if the query override is set, override the query
            if (this.config.query_override) {
                const query = jmespath.search(body, this.config.query_override);
                await kong.service.request.set_raw_query(qs.stringify(query));
            }
        }
    }

    async response(kong: Kong) {
        if (this.config.response_transform && await kong.response.getSource() === 'service') {
            const rawBody = await kong.service.response.getRawBody();
            const body = jmespath.search(JSON.parse(rawBody), this.config.response_transform);
            await kong.response.exit(await kong.response.getStatus(), JSON.stringify(body));
        }
    }
}

export const Plugin = PhenoUI_MAPS;
export const Name = 'phenoui_maps';
export const Version = '0.0.1';
export const Priority = 100;
export const Schema = [
    {target_route: {type: "string", required: true}},
    {method: {type: "string", required: true}},
    {query_override: {type: "string", required: false}}, // this is computed after the request is transformed
    {request_transform: {type: "string", required: false}},
    {response_transform: {type: "string", required: false}},
];
