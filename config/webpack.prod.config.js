/*
 * @Author: Vincent
 * @Date: 2021-01-11 13:49:34
 * @LastEditTime: 2021-01-13 17:22:03
 * @LastEditors: Vincent
 * @Description:
 */
const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  //   入口文件
  entry: ["react-hot-loader/patch", path.resolve(__dirname, "../src/index.js")],
  //   输出到dist目录
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash:8].js", // contenthash：只有模块的内容改变，才会改变hash值
  },
  //   解析
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
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
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
          "postcss-loader",
          {
            loader: "less-loader",
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
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // 模块化引入，打包后的命名采用自定规则
                localIdentName: "[name]-[local]-[hash:5]",
              },
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  // 解析
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  //   插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin(),
  ],
});
