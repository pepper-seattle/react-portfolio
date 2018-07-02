import React, { Component } from 'react';
import celticShield from './celticShield.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={celticShield} alt="AO" />
          <h1>Anne O'Malley</h1>
        </header>
      </div>
    );
  }
}

export default App;
