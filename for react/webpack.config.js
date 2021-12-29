const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    // devtool : "source-map",
    // target: "node",

    output : {
        // you need to add public path for router to work
        // if you put / imported images won't appear
        publicPath: '',
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    devServer: {
        static: './dist',
        hot: true,
        // you need to add historyApiFallback for router to work
        historyApiFallback: true
    },

    plugins: [
        new MiniCssExtractPlugin()
    ],

    resolve: {
      extensions: [".js",".jsx"]  
    },

    devtool: 'source-map',

    module:{
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
                use : [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath:""}
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}