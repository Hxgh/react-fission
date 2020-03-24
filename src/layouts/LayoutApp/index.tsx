import React, { Component } from 'react';
import styles from './styles.less';

import { Route, Redirect } from 'react-router-dom';
import RouterMap from '../../router/RouterMap';

export default class AppLayout extends Component<any> {
  render() {
    return (
      <div className={styles.appLayout}>
        <RouterMap routers={this.props.routers}>
          <Route
            exact
            path="/app"
            component={() => {
              return <Redirect to="/app/home" />;
            }}
          />
        </RouterMap>
      </div>
    );
  }
}
