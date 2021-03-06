const path = require("path")
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin-next');

const {
    NODE_ENV = 'development'
} = process.env


//configuration for generating react build file
const clientConfig = {
    mode: NODE_ENV,
    watch : NODE_ENV === 'development',
    entry: "./client/index.js",
    output: {
        // you need to add public path for router to work
        // if you put / imported images won't appear
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        assetModuleFilename: 'images/[hash][ext][query]',
        filename: 'client.js'
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
    },

    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                exclude: /node_modules/,
                type: "asset"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(c|s[ac])ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}

module.exports = clientConfig