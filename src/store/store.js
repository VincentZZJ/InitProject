/*
 * @Author: Vincent
 * @Date: 2021-01-12 11:23:38
 * @LastEditTime: 2021-01-14 16:48:32
 * @LastEditors: Vincent
 * @Description:
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as page1State from './page1/reducer';
import * as page2State from './page2/reducer';

const store = createStore(
  combineReducers({ ...page1State, ...page2State }),
  applyMiddleware(thunk),
);

export default store;
