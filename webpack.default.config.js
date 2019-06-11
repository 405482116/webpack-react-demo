const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // version < 3.0  
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // version > 3.0  

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'main'),
  // watch: true,
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
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
          }]
        ]
      }
    }, {
      // 编译sass为css 
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ],
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [
    //打包前先清空
    new CleanWebpackPlugin(),
    //热更新,不是刷新
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true, //会在打包好的bundle.js后面加上hash串
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    useLocalIp: true, //允许本地IP地址访问
    // host: '0.0.0.0',
    port: 3000,
    hot: true,  //开启热更新
  }
};