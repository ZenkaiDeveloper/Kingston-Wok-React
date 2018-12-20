import React, { Component } from 'react';
import '../styles/SideMenu.css'

class SideMenu extends Component{


  render(){
    return(
      <div>
        <ul className="nav-list">
          <li className="list-item">Home</li>
          <li className="list-item">Reservations</li>
          <li className="list-item">Menu</li>
        </ul>
      </div>
    )
  }
}

export default SideMenu
