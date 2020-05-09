import React, { Component } from 'react';
import { Menu } from 'antd';
import {
  TeamOutlined,
  DatabaseOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import menu from './menu';
import { roleFilter } from '../../../utils/tools';
import { connect } from 'react-redux';

const { SubMenu } = Menu;

interface Props {
  collapsed: boolean;
  history?: any;
  menuKey?: string;
}
interface State {
  selectedKey: string;
  openKey: string;
}

function mapStateToProps(state: any) {
  return {
    menuKey: state.counter.count,
  };
}

class MenuMap extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedKey: '',
      openKey: '',
    };
  }
  onSelect(select: any) {
    const { key } = select;
    let item: any = menu.find((i: any) => {
      return (
        (i.children &&
          i.children.length > 0 &&
          i.children.find((ii: any) => {
            return ii.key === key;
          })) ||
        i.key === key
      );
    });
    this.props.history.push({
      pathname:
        item.children && item.children.length > 0
          ? `/app/${item.key}/${key}/`
          : `/app/${key}`,
    });
  }
  render() {
    let defaultSelectedKeys = '';
    let openKey = '';
    let openAll = menu.map((i: any) => i.key);
    if (
      this.props.history &&
      this.props.history.location &&
      this.props.history.location.pathname.split('/').length > 3
    ) {
      let pathArr = this.props.history.location.pathname.split('/');
      defaultSelectedKeys = pathArr[3] || '';
      openKey = pathArr[2];
    }
    return (
      <Menu
        defaultSelectedKeys={[this.props.menuKey || defaultSelectedKeys]}
        selectedKeys={[this.props.menuKey || defaultSelectedKeys]}
        defaultOpenKeys={openAll || [openKey]}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.props.collapsed}
        onSelect={this.onSelect.bind(this)}
      >
        {menu.map((i: any) => {
          if (roleFilter(i.role, true)) {
            if (i.children && i.children.length > 0) {
              return (
                <SubMenu
                  key={i.key}
                  title={
                    <span>
                      {i.icon === 'TeamOutlined' && <TeamOutlined />}
                      {i.icon === 'DatabaseOutlined' && <DatabaseOutlined />}
                      {i.icon === 'CustomerServiceOutlined' && (
                        <CustomerServiceOutlined />
                      )}
                      <span>{i.title}</span>
                    </span>
                  }
                >
                  {i.children.map((ii: any) => {
                    if (roleFilter(ii.role, true)) {
                      return <Menu.Item key={ii.key}>{ii.title}</Menu.Item>;
                    }
                    return null;
                  })}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={i.key}>
                {i.icon === 'DatabaseOutlined' && <DatabaseOutlined />}
                <span>{i.title}</span>
              </Menu.Item>
            );
          }
          return null;
        })}
      </Menu>
    );
  }
}

export default connect(mapStateToProps, {})(MenuMap);
