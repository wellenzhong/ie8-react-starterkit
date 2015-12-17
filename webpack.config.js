/* global __dirname */
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: [
        "./src/index"
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/",
        sourceMapFilename: "[file].map?hash=[hash]"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: "babel"
			}
		]
	}
};