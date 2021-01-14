/*
 * @Author: Vincent
 * @Date: 2021-01-13 11:19:20
 * @LastEditTime: 2021-01-13 11:19:21
 * @LastEditors: Vincent
 * @Description:
 */
module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["last 5 version", ">1%", "ie 11"],
    }),
  ],
};
