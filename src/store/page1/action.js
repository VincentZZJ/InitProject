/*
 * @Author: Vincent
 * @Date: 2021-01-12 14:27:08
 * @LastEditTime: 2021-01-14 16:47:29
 * @LastEditors: Vincent
 * @Description:
 */

import * as pro from './action-type';

// 初始化action
export const launchPage1Info = (params) => ({
  type: pro.LAUNCH_PAGE1,
  ...params,
});
