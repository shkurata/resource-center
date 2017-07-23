import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
        title="Title"
        iconClassNameRight="muidoscs-icon-navigation-expand"
        />
      </div>
    );
  }
}

export default App;
