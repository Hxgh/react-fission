import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Login, NoMatch } from './components';
import LayoutBase from '../layouts/LayoutBase';
import routers from './routers';
import RouterMap from './RouterMap';

export default class App extends Component<any> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <Redirect to="/app" />;
            }}
          />
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
