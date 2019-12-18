import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import routers from './routers';
import View from './components';

interface RouterState {
  routers: Array<any>;
}

export default class RouterView extends Component<any> {
  state: RouterState = {
    routers: []
  };
  componentDidMount() {
    this.setState({
      routers: routers
    });
    console.log(View, routers);
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          {this.state.routers.map((item, key) => {
            return <Route exact path={item.path} key={key} />;
          })}
        </Switch>
      </HashRouter>
    );
  }
}
