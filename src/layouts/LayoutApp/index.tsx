import React, { Component } from 'react';
import styles from './styles.less';

import { Route, Switch, Redirect } from 'react-router-dom';

export default class AppLayout extends Component<any> {
  render() {
    return (
      <div className={styles.appLayout}>
        <Switch>
          <Route
            exact
            path="/app"
            component={() => {
              return <Redirect to="/app/home" />;
            }}
          />
          {this.props.routers.map((item: any, key: any) => {
            return (
              <Route
                exact
                path={item.path}
                key={key}
                component={item.component}
              />
            );
          })}
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
