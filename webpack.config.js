const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/parts');

const PATHS = {
    build: path.resolve(__dirname, 'build'),
    bootstrap: path.resolve(__dirname, 'src', 'stylesheets', 'vendor', 'bootstrap', 'css', 'bootstrap-3.3.7.min.css'),
    routes: path.resolve(__dirname, 'src', 'js', 'app', 'routes.js'),
    src: path.resolve(__dirname, 'src'),
    style: path.resolve(__dirname, 'src', 'stylesheets', 'main.scss'),
};

const common = {
    entry: [
        PATHS.routes    // App's entry point
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: [ 'react-hot', 'babel?presets[]=es2015,presets[]=react' ],
                include: PATHS.src
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=100000',
                include: PATHS.src
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file",
                include: PATHS.src
            },
            { 
                test: /\.(woff|woff2)$/, 
                loader:"url?prefix=font/&limit=5000",
                include: PATHS.src
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=application/octet-stream",
                include: PATHS.src
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=image/svg+xml",
                include: PATHS.src
            },
            {
                test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                loader: 'imports?define=>false&this=>window',
                include: PATHS.src
            }
        ]
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Ludo' }),
        new webpack.NoErrorsPlugin()
    ]
};

var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
        common,
        {
            devtool: 'source-map'
        },
        parts.minify(),
        parts.setFreeVariable(
            'process.env.NODE_ENV',
            'production'
        ),
        parts.setupCSS(PATHS.bootstrap),
        parts.setupSCSS(PATHS.style)
    );
    break;
  default:
    config = merge(
        common,
        {
            devtool: 'eval-source-map'
        },
        parts.devServer({
            // Customize host/port here if needed
            host: process.env.HOST,
            port: process.env.PORT
        }),
        parts.setupCSS(PATHS.bootstrap),
        parts.setupSCSS(PATHS.style)
    );
}

module.exports = validate(config);