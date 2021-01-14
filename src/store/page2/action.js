/*
 * @Author: Vincent
 * @Date: 2021-01-12 15:58:05
 * @LastEditTime: 2021-01-14 16:53:19
 * @LastEditors: Vincent
 * @Description:
 */
import * as pro from './action-type';

// 初始化action
export const INITPAGEACTION = (params) => ({
  type: pro.LAUNCH_PAGE2,
  ...params,
});
