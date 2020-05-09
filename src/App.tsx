import React, { Component } from 'react';
import './App.less';
import RouterView from './router';
import Store from './store';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <div className="App">
          <Store>
            <RouterView />
          </Store>
        </div>
      </ConfigProvider>
    );
  }
}

export default App;
