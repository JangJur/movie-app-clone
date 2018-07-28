import React, { Component } from 'react';
import './App.css';
import Movie from './Moive.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}

export default App;