import React, { Component } from 'react';
import './App.less';
import RouterView from './router';

import reducer from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(reducer);

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
