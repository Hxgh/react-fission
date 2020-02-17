import React, { Component } from 'react';
import styles from './styles.less';

interface Props {}
interface State {}

class TestPage extends Component<Props, State> {
  render() {
    return <div className={styles.test}>TestPage</div>;
  }
}

export default TestPage;
