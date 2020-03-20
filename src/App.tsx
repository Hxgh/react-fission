import React, { Component } from 'react';
import './App.less';
import RouterView from './router';
import Store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Store>
          <RouterView />
        </Store>
      </div>
    );
  }
}

export default App;
