const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-soure-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ],
    },
    // devServer: {
    //     // publicPath:'/',
    //     contentBase: path.join(__dirname, 'dist'),//本地服务器所加载的页面所在的目录
    //     historyApiFallback: true,//不跳转 historyApiFallback: true,在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    //     inline: true,//实时刷新
    //     open: true,
    //     compress: true,
    //     useLocalIp: true, //允许本地IP地址访问
    //     host: 'localhost',
    //     port: 3000,
    //     hot: true,  //开启热更新
    // },
    plugins: [
        //热更新,不是刷新, 查看要修补(patch)的依赖
        new webpack.HotModuleReplacementPlugin(),

        // 添加process.env.NODE_ENV变量，在js使用 process.env.NODE_ENV !== 'development' &&　执行业务逻辑
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
})