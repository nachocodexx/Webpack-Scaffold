const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


const cfg = {
    node: {
        __dirname: true
    },
    stats: "errors-only",
    target: 'web',
    // externals: [nodeExternals()],
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'index.ts')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader',]
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',

            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            }

        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            styles: path.resolve(__dirname, 'src', 'styles'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App2',
            inject: 'body'
        }),


    ]





}



module.exports = cfg