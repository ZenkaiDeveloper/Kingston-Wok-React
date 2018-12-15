import React, { Component } from 'react';
import '../styles/SideMenu.css'

class SideMenu extends Component{
  state={
    listStyles: "nav-list"
  }
  render(){
    return(
      <ul className={this.state.listStyles}>
        <li className="list-item">Home</li>
        <li className="list-item">Reservations</li>
        <li className="list-item">Menu</li>
        <li className="list-item">About Us</li>
      </ul>
    )
  }
}

export default SideMenu
