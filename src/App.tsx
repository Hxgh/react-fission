import React, { Component } from 'react';
import './App.less';
import RouterView from './router';
import reducer from './store';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

//redux & redux-devtools
const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers());

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <RouterView />
        </Provider>
      </div>
    );
  }
}

export default App;
