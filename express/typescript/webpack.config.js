const path = require('path');
const {CleanWebpackPlugin}= require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const WebpackShellPlugin = require('webpack-shell-plugin-next');

const {
    NODE_ENV = 'development',
  } = process.env;

console.log(NODE_ENV);

module.exports = {
    mode: NODE_ENV,
    target: "node",
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    
    entry : {
        server: "./src/index.ts"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'main.js'
    },

    devServer: {
        port: 8080
    },

    plugins: [
        new CleanWebpackPlugin(),
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
    externals: [nodeExternals()],

    resolve: {
        extensions: [".js",".ts"]
    },

    module:{
        rules: [
            {
                test: /\.ts$/i , 
                loader: 'awesome-typescript-loader'
            }
        ]
    } 
}