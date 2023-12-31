const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode : 'development',
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize:false,
                }, 

            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            esModule:false
                        }
                    }
                ]
            }
        ]
   },
   plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        ignoreOrder: false
    }),
    new CopyPlugin({
        patterns: [
            {from : 'src/assets', to : 'assets/'}
        ]
    })
   ]
}