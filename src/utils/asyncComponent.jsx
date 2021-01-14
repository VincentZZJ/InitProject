/*
 * @Author: Vincent
 * @Date: 2021-01-12 10:35:44
 * @LastEditTime: 2021-01-14 16:48:48
 * @LastEditors: Vincent
 * @Description:异步加载模块
 */
import React from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }

    render() {
      const Cmp = this.state.component;
      return Cmp ? <Cmp {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
