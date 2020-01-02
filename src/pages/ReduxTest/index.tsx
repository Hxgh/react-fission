import React, { Component } from 'react';
import styles from './styles.less';

import { Button } from 'antd';

export default class ReduxTest extends Component<any> {
  render() {
    return (
      <div className={styles.redux}>
        <div>
          <span>span触发store：</span>
          <Button>改变</Button>
        </div>
        <div>
          <span>展示：</span>
          <span>num</span>
        </div>
      </div>
    );
  }
}
