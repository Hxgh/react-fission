import React, { Component } from 'react';
import './Logo.less';

import { Link } from 'react-router-dom';
import icon from '../../../assets/icon.png';

interface Props {
  collapsed: boolean;
}
interface State {}

export default class Logo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`logo ${this.props.collapsed ? 'logo-max' : ''}`}
        title={this.props.collapsed ? 'React实验工程' : ''}
      >
        <Link
          to={{
            pathname: '/',
          }}
        >
          {this.props.collapsed && (
            <img className="logo-img-mini" src={icon} alt="logo" />
          )}
          {!this.props.collapsed && <span className="logo-title">React 实 验 工 程</span>}
        </Link>
      </div>
    );
  }
}
