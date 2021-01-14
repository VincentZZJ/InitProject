/*
 * @Author: Vincent
 * @Date: 2021-01-12 14:27:01
 * @LastEditTime: 2021-01-14 16:47:54
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
  dataList: [
    {
      id: '101',
      title: '这是page1的state',
      status: false,
      time: '2021-01-13 09:20',
    },
  ],
};

// 这里的命令比较关键，类似于dva中namespace,后续需要通过这个命名寻找
export const page1State = (state = defaultState, action) => {
  let $imuDataList;
  switch (action.type) {
    case pro.LAUNCH_PAGE1:
      $imuDataList = Immutable.fromJS(state.dataList);
      for (let i = 0; i < state.dataList.length; i += 1) {
        $imuDataList = $imuDataList.update(i, (item) => {
          if (item.get('id') === action.id) {
            item = item.set('status', true);
          }
          return item;
        });
      }
      console.log($imuDataList.toJS());
      return { ...state, ...{ dataList: $imuDataList.toJS() } };
    default:
      return state;
  }
};
