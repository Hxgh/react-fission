import React, { Component } from "react";
import styles from "./styles.less";

export default class LayoutBase extends Component<any> {
  render() {
    return <div className={styles.layout}>{this.props.children}</div>;
  }
}
