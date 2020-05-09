import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Skeleton, Typography } from 'antd';
interface Props {}
interface State {
  redirect: boolean;
}
declare global {
  interface Window {
    infiniteToken: NodeJS.Timer | null;
  }
}
export default class AppMount extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 888);
  }
  render() {
    return (
      <div>
        <Typography.Title level={2}>React实验工程</Typography.Title>
        <Skeleton active />
        {this.state.redirect && (
          <Redirect to="/app/universe" />
        )}
      </div>
    );
  }
}
