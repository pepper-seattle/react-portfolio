import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="App">
        </div>
      </div>
    );
  }
}

export default App;
