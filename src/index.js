/*
 * @Author: Vincent
 * @Date: 2021-01-11 13:50:33
 * @LastEditTime: 2021-01-14 16:44:04
 * @LastEditors: Vincent
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Route from './router/index';

// ReactDom.render(<div>Hello React!</div>, document.getElementById("app"));
const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('app'),
  );
};

render(Route);
