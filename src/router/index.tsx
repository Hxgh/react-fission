import React, { Component } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";


import View from "./components";
import BasicLayout from "../layouts/Layout";
import routers from "./routers";

class Auth extends Component<any> {
  render() {
    return "现在都有权限" == null ? (
      <Redirect to="/login" />
    ) : (
      <Redirect to="/home" />
    );
  }
}

interface RouterState {
  routers: Array<any>;
}

export default class App extends Component<any> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route path="/login" component={View.Login} />
          <BasicLayout>
            <Switch>
              {routers.map((item, key) => {
                return (
                  <Route
                    exact
                    path={item.path}
                    key={key}
                    component={item.component}
                  />
                );
              })}
              <Route component={View.NoMatch} />
            </Switch>
          </BasicLayout>
        </Switch>
      </HashRouter>
    );
  }
}
