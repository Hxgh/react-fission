import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Login, NoMatch } from './components';
import LayoutBase from '../layouts/LayoutBase';
import routers from './routers';
import RouterMap from './RouterMap';

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/404" component={NoMatch} />
          <LayoutBase>
            <RouterMap routers={routers} />
          </LayoutBase>
        </Switch>
      </BrowserRouter>
    );
  }
}
