import React, { Component } from 'react';
import styles from './styles.less';
import Navigation from './Navigation';
interface Props {}
interface State {}
class TestPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.home}>
        <Navigation />
      </div>
    );
  }
}

export default TestPage;
