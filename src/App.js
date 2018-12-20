import React, { Component } from 'react';
import './App.css';
import Homescreen from './components/Homescreen'
import { Route } from 'react-router-dom'
import Menu from './components/Menu.js'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/menu" component={ Menu } />
        <Route exact path="/" component={ Homescreen } />
      </div>
    );
  }
}

export default App;
