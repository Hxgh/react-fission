import React, { Component } from 'react';
import styles from './Layout.less';

import RouterView from '../router/RouterView';

export interface LayoutOption {
  bg: string;
  onClick?: () => void;
}

export default class BasicLayout extends Component<LayoutOption, any> {
  static defaultProps = {
    text: 'layout basic'
  };
  render() {
    const { onClick } = this.props;
    return (
      <div className={styles.layout} onClick={onClick}>
        <RouterView />>
      </div>
    );
  }
}
