const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    // devtool : "source-map",
    // target: "node",

    output : {
        publicPath: '/'
    },

    devServer: {
        static: './dist',
        hot: true,
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/, 
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/i, 
                exclude: /node_modules/, 
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}