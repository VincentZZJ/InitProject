import React from 'react';
import { connect } from 'react-redux';
import { launchPage1Info } from '@/store/page1/action';
import { Button, message } from 'antd';
import './index.css';
import styles from './index.less';

class Page1 extends React.Component {
  componentDidMount() {}

  launch = () => {
    this.props.launchPage1Info({ id: '101' });
  };

  clickFun = () => {
    message.info('测试antd模块');
  };

  render() {
    const {
      dataList: [{ id, title, status }],
    } = this.props;
    return (
      <div className={styles.bg}>
        <div id="div1">Here is Page1!</div>
        <div className={styles.green}>The id of this info is :{id}</div>
        <div>The title is :{title}</div>
        <div>The info is launch :{status ? 'yes' : 'no'}</div>
        <div>
          <button type="button" onClick={this.launch}>
            Launch
          </button>
          <Button onClick={this.clickFun}>测试antd按钮</Button>
        </div>
      </div>
    );
  }
}

// 将store中的state中的值作为传入组件的props输出
const mapStateToProps = (state) => ({
  dataList: state.page1State.dataList,
});

// 传入组件对state发出的action操作，同样作为传入组件的props输出
const mapDispatchToProps = (dispatch) => ({
  launchPage1Info: (params) => dispatch(launchPage1Info(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
