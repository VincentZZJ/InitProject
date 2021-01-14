/*
 * @Author: Vincent
 * @Date: 2021-01-11 13:49:11
 * @LastEditTime: 2021-01-13 17:05:26
 * @LastEditors: Vincent
 * @Description:
 */
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  //   解析
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[hash:8].[ext]",
            outputPath: "images/",
            limit: 8192,
          },
        },
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
  // 插件
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist"),
        },
      ],
    }),
  ],
};
