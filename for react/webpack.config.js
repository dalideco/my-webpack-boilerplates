const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path')

module.exports = {
    mode: "development",
    // devtool : "source-map",
    // target: "node",

    output: {
        // you need to add public path for router to work
        // if you put / imported images won't appear
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        // you need to add historyApiFallback for router to work
        historyApiFallback: true
    },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "public",
                    to: '.',

                    //ignoring index.html using globOptions
                    globOptions:{
                        ignore: ["**/index.html"]
                    }

                    // //ignoring index.html using filter
                    // filter: async (resourcePath) => {
                    //     const folders = resourcePath.split('/');
                    //     const filename = folders[folders.length-1]
                    //     return (filename !== "index.html")
                    // },
                },
            ],
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
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