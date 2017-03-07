/* global __dirname */
module.exports = {
    entry: __dirname + "/src/index.js",
    devtool: 'inline-source-map',
    output: {
        path: __dirname + "/dist",
        filename: "Bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
