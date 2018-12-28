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
          <Link className="menu-links" to="/menu/chinese"><p>Chinese Menu</p></Link>
          <Link className="menu-links" to="/menu/japanese"><p>Japanese Menu</p></Link>
          <Link className="menu-links" to="/menu/southeast"><p>South East Cusine</p></Link>
          <Link className="menu-links" to="/menu/combinations"><p>Lunch and Dinner Combos</p></Link>
        </div>
      </div>
    )
  }
}

export default Menu
