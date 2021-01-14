/*
 * @Author: Vincent
 * @Date: 2021-01-14 13:14:38
 * @LastEditTime: 2021-01-14 16:20:43
 * @LastEditors: Vincent
 * @Description:
 */
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  eslintIntegration: true,
  printWidth: 100, // 一行的字符数，超过会自动换行
  tabWidth: 2, // 一个tab代表几个空格，默认2
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
