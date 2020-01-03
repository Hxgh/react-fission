import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
        <Redirect to="/404" />
      </Switch>
    );
  }
}
