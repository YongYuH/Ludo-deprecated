const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./libs/parts');
const path = require('path');
const pkg = require('./package.json');
<<<<<<< HEAD
const webpack = require('webpack'); 
const validate = require('webpack-validator');
=======
const validate = require('webpack-validator');
const webpack = require('webpack'); 
>>>>>>> master

const PATHS = {
    build: path.resolve(__dirname, 'build'),
    mainscss: path.resolve(__dirname, 'src', 'stylesheets', 'main.scss'),
    routes: path.resolve(__dirname, 'src', 'js', 'app', 'routes.js'),
    src: path.resolve(__dirname, 'src'),
    style: path.resolve(__dirname, 'src', 'stylesheets')
};

const common = {
<<<<<<< HEAD
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
=======
    entry: {
        app: [PATHS.routes],
        mainscss: [PATHS.mainscss],
        vendor: Object.keys(pkg.dependencies)
    },

>>>>>>> master
    module: {
        loaders: [
            {
                test: /\.js?$/,
<<<<<<< HEAD
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loaders: [ 'react-hot', 'babel?presets[]=es2015,presets[]=react' ]
=======
                loaders: [ 'react-hot', 'babel?presets[]=es2015,presets[]=react' ],
                include: PATHS.src,
                exclude: /node_modules/
>>>>>>> master
            },
            {
                test: /\.(png|jpg|gif)$/,
<<<<<<< HEAD
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
=======
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
>>>>>>> master
            }
        ]
    },
    output: {
        path: PATHS.build,
<<<<<<< HEAD
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),    // <-- To generate hot update chunks
=======
        filename: '[name].js'
    },
    plugins: [
>>>>>>> master
        new HtmlWebpackPlugin({ title: 'Ludo' }),
        new webpack.NoErrorsPlugin()
    ]
};

var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
<<<<<<< HEAD
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
=======
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
            parts.setFreeVariable(
                'process.env.NODE_ENV',
                'production'
            ),
            parts.extractBundle({
                name: 'vendor'
            }),
            parts.minify(),
            parts.extractCSS(PATHS.mainscss),
            parts.purifyCSS([PATHS.mainscss])
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
            parts.setupSCSS(PATHS.mainscss)
        );
>>>>>>> master
}

module.exports = validate(config);