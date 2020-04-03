import React, { Component } from 'react';
import styles from './styles.less';

import { Button } from 'antd';
import { removeToken } from '../../utils/auth';

interface Props {}
interface State {}

class TestPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};

    // 绑定 this
    this.removeToken = this.removeToken.bind(this);
  }
  removeToken() {
    removeToken();
  }
  render() {
    return (
      <div className={styles.home}>
        <Button onClick={this.removeToken}>removeToken</Button>
      </div>
    );
  }
}

export default TestPage;
