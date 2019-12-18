import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import View from './components';
import BasicLayout from '../layouts/Layout';

class Auth extends Component<any> {
  render() {
    return '现在都有权限' == null ? (
      <Redirect to="/login" />
    ) : (
      <Redirect to="/app" />
    );
  }
}

export default class App extends Component<any> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/login" component={View.Login} />
          <Route path="/app" component={BasicLayout} />
          <Route component={View.NoMatch} />
        </Switch>
      </HashRouter>
    );
  }
}
