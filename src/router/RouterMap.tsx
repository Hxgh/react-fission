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
          return (
            <Route
              exact={!(item.routers && item.routers.length > 0)}
              path={item.path}
              key={key}
              render={props => {
                return <item.component {...props} routers={item.routers} />;
              }}
            />
          );
        })}
        <Route component={NoMatch} />
      </Switch>
    );
  }
}
