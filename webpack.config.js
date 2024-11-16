
// For multiple components, you can bundle them together in one
// entrypoint, or simply use as follows:
// const svelteComponentLibrary = {
//     name: '[name]',
//     type: 'var',
//     export: 'default'
// }

module.exports = {
    mode: 'development',
    entry: {
        svelte: {
            import: './node_modules/svelte/src/index-client.js',
            library: {
                name: 'svelte',
                type: 'global'
            }
        },
        Counter: {
            import: './src/Counter.svelte',
            library: {
                name: '[name]',
                type: 'var',
                export: 'default' // without this, we'd need to do (window.)Counter.default each time
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(svelte|svelte\.js)$/,
                use: 'svelte-loader'
            },
            {
                // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.svelte'],
        conditionNames: ['svelte']
    },
    optimization: {
        runtimeChunk: 'single'
    }
};