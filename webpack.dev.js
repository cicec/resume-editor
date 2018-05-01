const path = require('path')
const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './index.js',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        'stage-0'
                    ]
                }
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            path: 'dist',
            filename: 'index.html',
            template: './index.html',
            chunks: ['index'],
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}