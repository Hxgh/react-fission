import React, { Component } from 'react';
import styles from './styles.less';

import { Button } from 'antd';

import { login } from '../../api/account';
import { setToken } from '../../utils/auth';

interface Props {
  history: any;
}
interface State {
  to: Boolean;
}

class TestPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      to: false
    };

    // 绑定 this
    this.openRouterTo = this.openRouterTo.bind(this);
    this.requestTo = this.requestTo.bind(this);
  }
  openRouterTo() {
    this.props.history.push({
      pathname: '/app/test',
      state: { test: 12121 }
    });
    //目标页面取参 this.props.location.state;
  }
  requestTo() {
    login();
  }
  setToken() {
    setToken('dadas');
  }
  render() {
    return (
      <div className={styles.test}>
        <Button onClick={this.openRouterTo}>测试路由传参</Button>
        <Button onClick={this.setToken}>setToken</Button>
      </div>
    );
  }
}

export default TestPage;
