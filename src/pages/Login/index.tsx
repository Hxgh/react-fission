import React, { Component } from 'react';
import './styles.less';

import { Form, Button, Input, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { setToken, setUser } from '../../utils/auth';
import { login } from '../../api/account';
// import logo from '../../assets/logo.png';

interface Props {
  history: any;
}
interface State {}

const { Title } = Typography;

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      to: false,
    };

    // 绑定 this
    this.login = this.login.bind(this);
  }
  login(values: any) {
    login({ userAccount: values.user, userPwd: values.pwd }).then(
      (res: any) => {
        if (res && res.code && res.token && res.user) {
          setToken(res.token);
          setUser(res.user);
          this.props.history.push({
            pathname: '/',
          });
          window.location.reload();
        } else {
          message.warning(res.msg || res.message || '登陆失败');
        }
      }
    );
  }
  render() {
    return (
      <div className="login">
        <div className="login-logo">
          {/* <img className="login-logo-img" src={logo} alt="logo" /> */}
          <div className="login-logo-title">
            {'React实验工程'.split('').map((i: any, x: number) => (
              <span key={x}>{i}</span>
            ))}
          </div>
        </div>
        <div className="form">
          <Form name="control-ref" onFinish={this.login}>
            <div className="title">
              <Title level={4}>欢迎登陆</Title>
            </div>
            <div className="content">
              <Form.Item
                name="user"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名',
                  },
                  {
                    min: 1,
                    max: 20,
                    message: '用户名位数不正确',
                    validateTrigger: 'blur',
                  },
                ]}
              >
                <Input
                  placeholder="请输入用户名"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name="pwd"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                    validateTrigger: 'blur',
                  },
                  {
                    min: 1,
                    max: 20,
                    message: '密码位数不正确',
                    validateTrigger: 'blur',
                  },
                ]}
              >
                <Input.Password
                  placeholder="请输入密码"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="handle" htmlType="submit">
                  登陆
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
