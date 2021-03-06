import React, { Component } from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

interface Props {}
interface State {}

export default class NoMatch extends Component<Props, State> {
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
                NoMatchBack: true,
              },
            }}
          >
            <Button type="primary"> 回到首页</Button>
          </Link>
        }
      />
    );
  }
}
