const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

module.exports =  clientConfig