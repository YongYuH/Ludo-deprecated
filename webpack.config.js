var path = require('path');
var webpack = require('webpack');

var config = {
    devServer: {
        hot: true,    // <-- Enables HMR in webpack-dev-server and in libs running in the browser
        contentBase: './build',
    },
    entry: [
        'webpack-dev-server/client?http://localhost:8080',    // <-- Enables websocket connection (needs url and port)
        'webpack/hot/only-dev-server',    // <-- To perform HMR in the browser, doesn’t reload the browser upon syntax errors
        path.resolve(__dirname, 'src/js/app/routes.js')    // App's entry point
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react' ]
            },
            {
                test: /\.css$/,
                loader: 'style!css'    // <-- short for 'style-loader!css-loader'  (works right-to-left) 
            },
            {
              test: /\.scss$/,
              include: path.join(__dirname, 'src/stylesheets'),
              loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=100000'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file" 
            },
            { 
                test: /\.(woff|woff2)$/, 
                loader:"url?prefix=font/&limit=5000"
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                loader: 'imports?define=>false&this=>window'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),    // <-- To generate hot update chunks
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;