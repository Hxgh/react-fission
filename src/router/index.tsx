import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import {Login} from './components';
import BasicLayout from '../layouts/Layout';
import routers from './routers';
import RouerMap from './RouterMap';

class Auth extends Component<any> {
  render() {
    return '现在都有权限' == null ? (
      <Redirect to="/login" />
    ) : (
      <Redirect to="/home" />
    );
  }
}

export default class App extends Component<any> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/login" component={Login} />
          <BasicLayout>
            <RouerMap routers={routers} />
          </BasicLayout>
        </Switch>
      </HashRouter>
    );
  }
}
