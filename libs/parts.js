const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.clean = function(path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                // Without `root` CleanWebpackPlugin won't point to our project and will fail to work.
                root: process.cwd()
            })
        ]
    };
}

exports.clean = function(path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                // Without `root` CleanWebpackPlugin won't point to our project and will fail to work.
                root: process.cwd()
            })
        ]
    };
}

exports.devServer = function(options) {
    return {
        devServer: {
            // Enable history API fallback so HTML5 History API based routing works. 
            // This is a good default that will come in handy in more complicated setups.
            historyApiFallback: true,

            // Unlike the cli flag, this doesn't set HotModuleReplacementPlugin!
            hot: true,
            inline: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env to allow customization.
            // If you use Vagrant or Cloud9, set host: options.host || '0.0.0.0';
            // 0.0.0.0 is available to all network devices unlike default `localhost`.
            host: options.host, // Defaults to `localhost`
            port: options.port // Defaults to 8080
        },
        entry: [
            'webpack-dev-server/client?http://localhost:8080',    // <-- Enables websocket connection (needs url and port)
            'webpack/hot/only-dev-server'    // <-- To perform HMR in the browser, doesn’t reload the browser upon syntax errors
        ],
        plugins: [
            // Enable multi-pass compilation for enhanced performance in larger projects. Good default.
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ],
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,
            // Poll using interval (in ms, accepts boolean too)
            poll: 1000
        }
    };
}

exports.extractBundle = function(options) {
    const entry = {};
    entry[options.name] = options.entries;

    return {
        // Define an entry point needed for splitting.
        entry: entry,
        plugins: [
            // Extract bundle and manifest files. Manifest is needed for reliable caching.
            new webpack.optimize.CommonsChunkPlugin({
                names: [options.name, 'manifest']
            })
        ]
    };
}

exports.extractCSS = function(paths) {
    return {
        module: {
            loaders: [
                // Extract CSS during build
                {
                    test: /\.css$/,
<<<<<<< HEAD
                    loader: ExtractTextPlugin.extract('style', 'css'),
                    include: paths
                }
            ]
        },
        plugins: [
            // Output extracted CSS to a file
            new ExtractTextPlugin('[name].[chunkhash].css')
        ]
    };
}

exports.extractSCSS = function(paths) {
    return {
        module: {
            loaders: [
                // Extract CSS during build
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style', 'css!sass'),
=======
                    loader: ExtractTextPlugin.extract(
                        'style',
                        'css'
                    ),
                    include: paths
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract(
                        'style',
                        'css!sass'
                    ),
>>>>>>> master
                    include: paths
                }
            ]
        },
        plugins: [
            // Output extracted CSS to a file
<<<<<<< HEAD
            new ExtractTextPlugin('[name].[chunkhash].css')
=======
            new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
            new ExtractTextPlugin('stylesheets/[name].[chunkhash].css', {allChunks: false})
>>>>>>> master
        ]
    };
}

exports.minify = function() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                // Don't beautify output (enable for neater output)
                beautify: false,

                // Eliminate comments
                comments: false,

                // Compression specific options
                compress: {
<<<<<<< HEAD
                  warnings: false,
                  // Drop `console` statements
                  drop_console: true
=======
                    warnings: false,

                    // Drop `console` statements
                    drop_console: true
>>>>>>> master
                },

                // Mangling specific options
                mangle: {
<<<<<<< HEAD
                  // Don't mangle $
                  except: ['$'],
                  // Don't care about IE8
                  screw_ie8 : true,
                  // Don't mangle function names
                  keep_fnames: true
=======
                    // Don't mangle $
                    except: ['$'],

                    // Don't care about IE8
                    screw_ie8 : true,

                    // Don't mangle function names
                    keep_fnames: true
>>>>>>> master
                }
            })
        ]
    };
}

<<<<<<< HEAD
=======
exports.purifyCSS = function(paths) {
    return {
        plugins: [
            new PurifyCSSPlugin({
                basePath: process.cwd(),
                // `paths` is used to point PurifyCSS to files not visible to Webpack. 
                // You can pass glob patterns to it.
                paths: paths
            }),
        ]
    }
}

exports.setFreeVariable = function(key, value) {
    const env = {};
    env[key] = JSON.stringify(value);

    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    };
}

>>>>>>> master
exports.setupCSS = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: paths
                }
            ]
        }
    };
}

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
}

exports.setupSCSS = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loaders: ["style", "css", "sass"],
                    include: paths
                }
            ]
        }
    };
}