import React, { Component } from 'react';
import styles from './styles.less';
import request from '../../utils/request';

interface Props {}
interface State {}

class RequsetTest extends Component<Props, State> {
  render() {
    return <div className={styles.api}>RequsetTest</div>;
  }
}

export default RequsetTest;
