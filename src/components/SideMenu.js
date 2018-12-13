import React, { Component } from 'react';
import '../styles/SideMenu.css'

class SideMenu extends Component{
  state={
    listStyles: "nav-list"
  }
  render(){
    return(
      <ul className={this.state.listStyles}>
        <li className="list-item"><a href="#">Home</a></li>
        <li className="list-item"><a href="reservations.html">Reservations</a></li>
        <li className="list-item"><a href="#">Menu</a></li>
        <li className="list-item"><a href="#">About Us</a></li>
      </ul>
    )
  }
}

export default SideMenu
