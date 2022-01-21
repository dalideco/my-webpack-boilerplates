const path = require("path")
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const {
    NODE_ENV = 'development'
} = process.env

module.exports = {
    target: "node",
    entry: "./server/server.js",
    mode: NODE_ENV,
    watch: NODE_ENV === 'development',

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        filename: "main.js"
    },

    externals: [nodeExternals()],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                loader: 'babel-loader'
            },
            {
                test: /\.(sc|c)ss$/i,
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
                type: "asset/resource"
            },
        ]
    }

}