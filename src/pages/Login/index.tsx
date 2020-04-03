import React, { Component } from 'react';
import styles from './styles.less';

import { Button } from 'antd';

// import { login } from '../../api/account';
import { setToken } from '../../utils/auth';
import { login } from '../../api/account';

interface Props {
  history: any;
}
interface State {}

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      to: false
    };

    // 绑定 this
    this.login = this.login.bind(this);
  }
  login() {
    login().then(() => {
      setToken('dadas');
      this.props.history.push({
        pathname: '/'
      });
    });
  }
  render() {
    return (
      <div className={styles.login}>
        <Button onClick={this.login}>login</Button>
      </div>
    );
  }
}
