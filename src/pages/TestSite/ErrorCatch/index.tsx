import React, { Component } from 'react';

interface Props {}
interface State {
  hasError: boolean;
}

function ErrorCreateView() {
  return <div>错误时备用UI</div>;
}

export default class ErrorCatch extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 可以将错误日志上报给服务器
  }

  render = () => <div>{this.state.hasError && ErrorCreateView}</div>;
}
