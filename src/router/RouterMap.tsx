import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getToken } from '../utils/auth';
import { roleFilter } from '../utils/tools';

interface Props {
  history?: any;
  routers: Array<any>;
}
interface State {}

export default class RouterMap extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        {this.props.children}
        {this.props.routers.map((item, key) => {
          return (
            <Route
              exact={!(item.routers && item.routers.length > 0)}
              path={item.path}
              key={key}
              render={(props) => {
                //登陆权限
                if (getToken()) {
                  //模块权限
                  if (roleFilter(item.role)) {
                    return (
                      <item.component
                        {...props}
                        routers={item.routers || null}
                      />
                    );
                  }
                  return <Redirect to="/app/banned" />;
                }
                return <Redirect to="/login" />;
              }}
            />
          );
        })}
        <Redirect to="/404" />
      </Switch>
    );
  }
}
