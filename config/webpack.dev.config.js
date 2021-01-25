/*
 * @Author: Vincent
 * @Date: 2021-01-11 13:49:11
 * @LastEditTime: 2021-01-25 14:49:29
 * @LastEditors: Vincent
 * @Description:
 */
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  //   入口文件
  entry: ['react-hot-loader/patch', path.resolve(__dirname, '../src/index.js')],
  //   输出到dist目录
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:8].js',
  },
  //   解析
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 如果启用css modules，改为true
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.(less)$/,
        include: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(less)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // 模块化引入，打包后的命名采用自定规则
                localIdentName: '[name]-[local]-[hash:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  // 本地运行
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
  },
  // 解析
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 可以免除写文件后缀
    alias: {
      '@': path.resolve(__dirname, '../src'), // 直接通过‘@’来定义src目录
    },
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      hash: false,
    }),
  ],
});
