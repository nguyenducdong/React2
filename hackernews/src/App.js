import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const helloReact = 'Welcome to react';
    return (
      <div className="App">
        <h2>{helloReact}</h2>

      </div>
    );
  }
}

export default App;
