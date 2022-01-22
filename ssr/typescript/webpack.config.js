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
    entry: "./client/index.ts",
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],

    resolve: {
        extensions: [".js", ".jsx",".ts",".tsx"]
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                exclude: /node_modules/,
                type: "asset/resource"
            },
            {
                test: /\.(t|j)sx?$/,
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



//server
const serverConfig = {
    entry: "./server/server.ts",
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
        extensions: ['.js', '.jsx','.ts','.tsx']
    },

    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new WebpackShellPlugin({
            onBuildStart:{
                scripts: ['echo "===> Starting packing with WEBPACK 5"'],
                blocking: true,
                parallel: false
            },
            onBuildEnd:{
                scripts: [(NODE_ENV === 'development')?'npm run run:dev':'echo "in production no execution"'],
                blocking: false,
                parallel: true
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/i,
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

module.exports = [clientConfig,serverConfig]