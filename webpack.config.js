var path = require('path');
var webpack = require('webpack');

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/js/app/routes.js')
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
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
              test: /\.scss$/,
              include: path.join(__dirname, 'src/stylesheets'),
              loaders: ["style", "css", "sass"]
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
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;