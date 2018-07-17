const nodeExternals = require('webpack-node-externals');
const path = require('path');
require('babel-polyfill');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'index.js',
        path: path.join(__dirname, ''),
        libraryTarget: 'commonjs-module',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                },
            },
        }],
    },
};