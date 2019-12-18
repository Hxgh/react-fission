import React, { Component } from "react";
import styles from "./Layout.less";

export default class BasicLayout extends Component<any> {
  render() {
    return <div className={styles.layout}>{this.props.children}</div>;
  }
}
