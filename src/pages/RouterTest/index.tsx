import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// React component
class Counter extends Component<any> {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

// Action
const increaseAction = { type: 'increase' };

// Reducer
function counter(state = { count: 0 }, action: any) {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state: any) {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch: any) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default class Home extends Component<any> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
