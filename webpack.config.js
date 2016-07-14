var path = require('path');
var webpack = require('webpack');

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'app/js/app/routes.js')
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'app'),
            loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react' ],
        },
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192'
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        }]
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