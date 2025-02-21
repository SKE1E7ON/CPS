const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    entry: './src/js/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve('./src/index.html')
            }),
    ],
    module:{
        rules:[
            {
                test: /\.html$/,
                use: ['html-loader'] 
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
} 