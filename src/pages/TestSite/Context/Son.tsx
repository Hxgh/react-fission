import React from 'react';
import { Consumer } from './index';
const Son: React.FC<{}> = () => (
  <div>
    <Consumer>
      {(name) => (
        <div>
          {/* 子孙组件任意嵌套 */}
          这里是Context子孙组件读取值：{name}
        </div>
      )}
    </Consumer>
  </div>
);
export default Son;
