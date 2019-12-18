import React, { Component } from "react";
import "./App.less";
import RouterView from "./router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterView />
      </div>
    );
  }
}

export default App;
