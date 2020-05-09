import React, { Component } from 'react';
import './styles.less';

import { Route, Redirect } from 'react-router-dom';
import RouterMap from '../../router/RouterMap';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ResetToken from '../../components/ResetToken';

interface Props {
  routers: Array<Object>;
}
interface State {
  collapsed: boolean;
}

export default class AppLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    // 绑定 this
    this.isCollapse = this.isCollapse.bind(this);
  }
  isCollapse(collapsed: boolean) {
    this.setState({
      collapsed: !!collapsed,
    });
  }
  render() {
    return (
      <div className="app-layout">
        <ResetToken />
        <div
          className={`app-layout-left ${
            this.state.collapsed ? 'min-left' : ''
          }`}
        >
          <Sidebar {...this.props} collapsed={this.state.collapsed} />
        </div>
        <div
          className={`app-layout-right ${
            this.state.collapsed ? 'max-right' : ''
          }`}
        >
          <div className="app-layout-top">
            <Header isCollapse={this.isCollapse} />
          </div>
          <div className="app-layout-main">
            <RouterMap routers={this.props.routers}>
              <Route
                exact
                path="/app"
                component={() => {
                  return <Redirect to="/app/home" />;
                }}
              />
            </RouterMap>
          </div>
        </div>
      </div>
    );
  }
}
