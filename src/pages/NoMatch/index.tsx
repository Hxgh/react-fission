import React, { Component } from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

interface Props {}

export default class NoMatch extends Component<any> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link
            to={{
              pathname: '/',
              state: {
                NoMatchBack: true
              }
            }}
          >
            <Button type="primary"> 回到首页</Button>
          </Link>
        }
      />
    );
  }
}
