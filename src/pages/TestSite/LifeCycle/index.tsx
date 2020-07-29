import React from 'react';
interface Props {}
interface State {}
export default class LifeCycle extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    console.log('LifeCycle constructor');
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('LifeCycle getDerivedStateFromProps', nextProps, prevState);
    return nextProps;
  }

  render() {
    console.log('LifeCycle render');
    return <div />;
  }

  componentDidMount() {
    console.log('LifeCycle componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('LifeCycle getSnapshotBeforeUpdate', prevProps, prevState);
    // 返回更新内容的高度
    return '300px';
  }

  componentDidUpdate(prevProps: Props, prevState: Props, param: any) {
    console.log(
      'LifeCycle componentDidUpdate',
      prevProps,
      prevState,
      param
    );
  }

  componentWillUnmount() {
    console.log('LifeCycle componentWillUnmount');
  }
}
