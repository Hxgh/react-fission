import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';

import { setUser } from '../../store/actions';

function mapStateToProps(state: any) {
  return {
    num: state.counter.count
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    setClick: (num: Number) => dispatch(setUser(num))
  };
}

interface Props {
  setClick: (num: Number) => void;
  num: Number;
}
interface State {
  num: Number;
}

class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      num: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick() {
    const { setClick } = this.props;
    const { num } = this.state;
    setClick(num);
  }
  handleChange(e: any) {
    this.setState({
      num: e.target.value
    });
  }
  render() {
    const { num } = this.props;
    return (
      <div>
        <div>input.state.num：{this.state.num}</div>
        <div>num：{num}</div>
        <Input onChange={e => this.handleChange(e)} />
        <Button onClick={this.handleClick}>Increase</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
