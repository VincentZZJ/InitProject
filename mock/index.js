/*
 * @Author: Vincent
 * @Date: 2021-01-28 17:31:59
 * @LastEditTime: 2021-01-28 17:32:24
 * @LastEditors: Vincent
 * @Description:
 */
const getSearchData = (req, res) => {
  res.json({
    code: '0',
    desc: 'success',
    msg: {
      count: 100,
    },
  });
};
module.exports = {
  'POST /api/formInfoSubmit': getSearchData,
};
