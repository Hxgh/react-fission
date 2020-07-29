import React, { Component } from 'react';
import styles from './styles.less';
import Test from '../TestSite/LifeCycle';

interface Props {}
interface State {}
export default class Universe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.universe}>
        <Test />
      </div>
    );
  }
}
