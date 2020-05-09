import React, { Component } from 'react';
import './Header.less';

import { loginOut } from '../../../api/account';
import { removeToken, getUser } from '../../../utils/auth';
import { message, Space, Tag } from 'antd';
import {
  MoreOutlined,
  EllipsisOutlined,
  ExportOutlined,
} from '@ant-design/icons';

interface Props {
  isCollapse: (isCollapse: boolean) => void;
}
interface State {
  collapsed: boolean;
  user: any;
}

export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: false,
      user: {},
    };
    // 绑定 this
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.removeToken = this.removeToken.bind(this);
  }
  componentDidMount() {
    let user: any = getUser();
    this.setState({
      user: user,
    });
  }
  toggleCollapsed = () => {
    this.props.isCollapse(!this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  removeToken() {
    loginOut().then((res: any) => {
      if (res && res.code && res.code === 1) {
        message.success(res.message || `退出登陆成功。`);
        removeToken();
      } else {
        message.warn(res.message || `退出登陆失败！`);
      }
    });
  }
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div
            className="header-button"
            onClick={this.toggleCollapsed}
            title={this.state.collapsed ? '展开菜单' : '折叠菜单'}
          >
            {React.createElement(
              this.state.collapsed ? MoreOutlined : EllipsisOutlined
            )}
          </div>
        </div>
        <div className="header-right">
          <Space>
            <span>{this.state.user.userAccount}</span>
            <Tag>{this.state.user.roleName}</Tag>
          </Space>
          <div
            className="header-button"
            onClick={this.removeToken}
            title="退出"
          >
            <ExportOutlined />
          </div>
        </div>
      </div>
    );
  }
}
