import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { NoMatch } from './components';

interface RouterMapOption {
  routers: Array<any>;
}

export default class RouterMap extends Component<RouterMapOption, any> {
  render() {
    return (
      <Switch>
        {this.props.routers.map((item, key) => {
          if (item.children && item.children.length > 0) {
            return <RouterMap routers={item.children} />;
          } else {
            return (
              <Switch key={key}>
                <Route
                  exact
                  path={item.path}
                  key={key}
                  component={item.component}
                />
                <Route component={NoMatch} />
              </Switch>
            );
          }
        })}
      </Switch>
    );
  }
}
