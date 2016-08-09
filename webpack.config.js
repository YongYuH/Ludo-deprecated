const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./libs/parts');
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack'); 
const validate = require('webpack-validator');

const PATHS = {
    build: path.resolve(__dirname, 'build'),
    bootstrap: path.resolve(__dirname, 'src', 'stylesheets', 'vendor', 'bootstrap', 'css', 'bootstrap-3.3.7.min.css'),
    routes: path.resolve(__dirname, 'src', 'js', 'app', 'routes.js'),
    style: path.resolve(__dirname, 'src', 'stylesheets', 'main.scss'),
};

const common = {
    // devServer: {
    //     hot: true,    // <-- Enables HMR in webpack-dev-server and in libs running in the browser
    //     contentBase: './build',
    // },
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's convenient with more complex configurations.
    entry: {
        // 'webpack-dev-server/client?http://localhost:8080',    // <-- Enables websocket connection (needs url and port)
        // 'webpack/hot/only-dev-server',    // <-- To perform HMR in the browser, doesn’t reload the browser upon syntax errors
        routes: PATHS.routes,    // App's entry point
        vendor: Object.keys(pkg.dependencies)
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loaders: [ 'react-hot', 'babel?presets[]=es2015,presets[]=react' ]
            },
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'    // <-- short for 'style-loader!css-loader'  (works right-to-left) 
            // },
            // {
            //   test: /\.scss$/,
            //   include: path.join(__dirname, 'src/stylesheets'),
            //   loaders: ["style", "css", "sass"]
            // },
            {
                test: /\.(png|jpg|gif)$/,
                include: path.join(__dirname, 'src'),
                loader: 'url-loader?limit=100000'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                include: path.join(__dirname, 'src'), 
                loader: "file" 
            },
            { 
                test: /\.(woff|woff2)$/,
                include: path.join(__dirname, 'src'), 
                loader:"url?prefix=font/&limit=5000"
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                include: path.join(__dirname, 'src'), 
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                include: path.join(__dirname, 'src'), 
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                include: path.join(__dirname, 'src'),
                loader: 'imports?define=>false&this=>window'
            }
        ]
    },
    output: {
        path: PATHS.build,
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),    // <-- To generate hot update chunks
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
            devtool: 'source-map',
            output: {
                path: PATHS.build,
                filename: '[name].[chunkhash].js',
                // This is used for require.ensure. The setup will work without but this is useful to set.
                chunkFilename: '[chunkhash].js'
            }
        },
        parts.clean(PATHS.build),
        parts.extractBundle({
            name: 'vendor',
            entries: ['react']
        }),
        parts.extractCSS(PATHS.bootstrap),
        parts.extractSCSS(PATHS.style),
        parts.setFreeVariable(
            'process.env.NODE_ENV',
            'production'
        ),
        parts.minify()
    );
    break;
  default:
    config = merge(
        common,
        {
            devtool: 'source-map'
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