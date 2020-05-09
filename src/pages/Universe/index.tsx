import React, { Component } from 'react';
import styles from './styles.less';
interface Props {}
interface State {}
export default class Universe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={styles.universe}>UNIVERSE</div>;
  }
}
