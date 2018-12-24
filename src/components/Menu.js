import React, { Component } from 'react';
import '../styles/Menu.css';
import Header from './Header.js';
import '../styles/Menu.css';
import BackgroundImg from '../Images/wood.jpeg';
import { Link } from 'react-router-dom'

class Menu extends Component{


  render(){
    return(
      <div className="menu" style={{background:`url(${BackgroundImg})`, backgroundSize: "cover", backgroundAttachment: "fixed", minHeight:'100vh', paddingBottom:"3rem"}}>
        <Header />
        <div className="header-spacer"></div>
        <div>
          <p className="menu-hook">At Kingston Wok we use high quality ingridients to bring you the best flavors all in one place.</p>
        </div>
        <div className="menu-categories">
          <p><Link to="/menu/chinese">Chinese Menu</Link></p>
          <p><Link to="/menu/japanese">Japanese Menu</Link></p>
          <p><Link to="/menu/southeast">South East Cusine</Link></p>
          <p><Link to="/menu/combinations">Lunch and Dinner Combos</Link></p>
        </div>
      </div>
    )
  }
}

export default Menu
