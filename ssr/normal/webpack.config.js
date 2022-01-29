const path = require("path")
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin-next');

const {
    NODE_ENV = 'development'
} = process.env

//server
const serverConfig = {
    entry: "./server/server.js",
    mode: NODE_ENV,
    target: 'node',
    watch: NODE_ENV === 'development',

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        filename: "main.js",
        assetModuleFilename: 'images/[hash][ext][query]',
    },

    externals: [nodeExternals()],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new WebpackShellPlugin({
            onBuildStart:{
                scripts: ['echo "===> Starting packing with WEBPACK 5"'],
                blocking: true,
                parallel: false
            },
            onBuildEnd:{
                scripts: [
                    'webpack --config client.config.js',
                    (NODE_ENV === 'development')?'npm run run:dev':'echo "in production no execution"'
                ],
                blocking: false,
                parallel: true
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sc|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    }, 
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                exclude: /node_modules/,
                type: "asset/resource"
            },
        ]
    }
}

module.exports = serverConfig