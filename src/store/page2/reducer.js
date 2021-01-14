/*
 * @Author: Vincent
 * @Date: 2021-01-12 15:59:24
 * @LastEditTime: 2021-01-14 16:48:13
 * @LastEditors: Vincent
 * @Description:
 */
import Immutable from 'immutable';
import * as pro from './action-type';

const defaultState = {
  /**
   * 商品数据(介绍immutable的特性，数据持久化)
   * @type {Array}
   * example: [{
   *    id: 1, 消息ID
   *    title: "友情提示", 消息名称
   *    status: false, 是否发布
   *    time: 2021-01-12 00:00:00, 发布时间
   * }]
   */
  page2dataList: [
    {
      id: '101',
      title: '这是page2的state',
      status: false,
      time: '2021-01-13 09:20',
    },
  ],
};

export const page2State = (state = defaultState, action) => {
  let $imuDataList;
  switch (action.type) {
    case pro.LAUNCH_PAGE2:
      $imuDataList = Immutable.fromJS(state.page2dataList);
      for (let i = 0; i < state.page2dataList.length; i += 1) {
        $imuDataList = $imuDataList.update(i, (item) => {
          if (item.get('id') === action.id) {
            item = item.set('status', true);
          }
          return item;
        });
      }
      return { ...state, ...{ page2dataList: $imuDataList.toJS() } };
    default:
      return state;
  }
};
