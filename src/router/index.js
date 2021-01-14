/*
 * @Author: Vincent
 * @Date: 2021-01-12 10:28:24
 * @LastEditTime: 2021-01-14 16:44:55
 * @LastEditors: Vincent
 * @Description:
 */
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

const page1 = asyncComponent(() => import('@/pages/Page1/index.jsx'));
const page2 = asyncComponent(() => import('@/pages/Page2/index.jsx'));

export default class RouteConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/page1" exact component={page1} />
          <Route path="/page2" component={page2} />
          <Redirect exact from="/" to="/page1" />
          <Route component={page1} />
        </Switch>
      </HashRouter>
    );
  }
}
