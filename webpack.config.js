const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
};