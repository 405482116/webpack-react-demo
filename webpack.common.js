const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // version < 3.0  
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // version > 3.0 

module.exports = {
    mode: 'development',
    //webpack-Hot-middleware webpack-dev-middleware 实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.join(__dirname, 'src/todo-demo/', 'index')],
    // watch: true,
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: "bundle.[hash:4].js",
        chunkFilename: '[name].js'
    },
    module: {
        rules: [{

            // 所有.js .jsx结尾的文件都会通过babel-loder加载
            test: /.js|.jsx?$/,
            include: [
                path.resolve(__dirname, 'src')// 所包含src文件目录下的文件
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules')//排除掉nod_modules,优化打包速度
            ],
            loader: 'babel-loader',
            query: {
                presets: [
                    ["@babel/env", {
                        "targets": {
                            "browsers": "last 2 chrome versions"
                        }
                    }, "@babel/preset-es2015",]
                ]
            }
        },
        {
            // 图片聚合
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader"
        },]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    plugins: [
        //打包前先清空
        new CleanWebpackPlugin(),
        //热更新,不是刷新, 查看要修补(patch)的依赖
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            // hash: true, //会在打包好的bundle.js后面加上hash串
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                React: {
                    name: 'React',
                    test: /(react|react-dom)/,
                    chunks: 'initial',
                    priority: 80,
                },
                chunks: 'initial',
                minSize: '30000',
                maxAsyncRequests: '5',
            },
        }
    },
};