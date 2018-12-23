import React, { Component } from 'react';
import './App.css';
import Homescreen from './components/Homescreen'
import { Route } from 'react-router-dom'
import Menu from './components/Menu.js'
import ChineseMenu from './components/ChineseMenu.js'
import JapaneseMenu from './components/JapaneseMenu'
import SouthEastMenu from './components/SouthEastMenu'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/menu" component={ Menu } />
        <Route exact path="/" component={ Homescreen } />
        <Route exact path="/menu/chinese" component={ ChineseMenu } />
        <Route exact path="/menu/japanese" component={ JapaneseMenu } />
        <Route exact path="/menu/southeast" component={ SouthEastMenu } />
      </div>
    );
  }
}

export default App;
