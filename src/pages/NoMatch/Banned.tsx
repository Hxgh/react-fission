import React, { Component } from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

interface Props {
  history?: any;
}
interface State {}

export default class NoMatch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  back() {
    this.props.history.go(-1);
  }
  render() {
    return (
      <Result
        status="403"
        title="暂无权限"
        subTitle="抱歉，您所登陆的用户在该模块受访问权限控制！"
        extra={
          <Link
            to={{
              pathname: '/app/home',
              state: {
                NoMatchBack: true,
              },
            }}
          >
            <Button type="primary" onClick={this.back.bind(this)}>
              返回
            </Button>
          </Link>
        }
      />
    );
  }
}
