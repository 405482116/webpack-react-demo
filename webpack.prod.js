const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        //热更新,不是刷新, 查看要修补(patch)的依赖
        new webpack.HotModuleReplacementPlugin(),

        // 添加process.env.NODE_ENV变量，在js使用 process.env.NODE_ENV !== 'production' &&　执行业务逻辑
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        // 压缩js, 如果需要source map设置属性 sourceMap
        new UglifyJSPlugin(
            {
                sourceMap: true
            }
        ),
        new MiniCssExtractPlugin({

            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                // fallback to style-loader in development
                loaders: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
})