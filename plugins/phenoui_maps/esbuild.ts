import * as esbuild from 'https://deno.land/x/esbuild@v0.23.0/mod.js';
import { denoPlugins } from 'jsr:@luca/esbuild-deno-loader@^0.10.3';

const stripNodeColonPlugin = {
    name: 'strip-node-colon',
    // deno-lint-ignore no-explicit-any
    setup(build: { onResolve: any }): void {
        // deno-lint-ignore no-explicit-any
        build.onResolve({ filter: /^node:/ }, (args: any) => {
            return { path: args.path.slice('node:'.length), external: true }
        })
    }
}


let ctx = await esbuild.context({
    plugins: [stripNodeColonPlugin, ...denoPlugins()],
    entryPoints: ['src/mod.ts'],
    outfile: 'build/phenoui_maps.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
    target: ['node12.22.9'],
})

await ctx.watch();
console.log('watching...');

// await esbuild.build({
//     plugins: [stripNodeColonPlugin, ...denoPlugins()],
//     entryPoints: ['src/mod.ts'],
//     outfile: 'build/phenoui_maps.js',
//     bundle: true,
//     format: 'cjs',
//     platform: 'node',
//     target: ['node12.22.9'],
// });
//
// await esbuild.stop();
