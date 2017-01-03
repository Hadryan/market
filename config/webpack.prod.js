const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    module: {
        loaders: [
            {
                test: /\/index\.html$/,
                loader: 'string-replace',
                query: {
                    search: '<!--<script src="ortolang-config-url"></script>-->',
                    replace: '<script src="${api_url}/config/client"></script>'
                }
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: false
        }),

        new ExtractTextPlugin('[name].[hash].css'),

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});
