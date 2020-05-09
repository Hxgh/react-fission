import React, { Component } from 'react';
import './Sidebar.less';

import Logo from './Logo';
import MenuMap from './MenuMap';

interface Props {
  collapsed: boolean;
}
interface State {}

export default class Sidebar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="menu">
        <Logo collapsed={this.props.collapsed} />
        <MenuMap {...this.props} collapsed={this.props.collapsed} />
      </div>
    );
  }
}
