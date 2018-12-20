import React, { Component } from 'react';
import '../styles/SideMenu.css';
import { Link } from 'react-router-dom'


class SideMenu extends Component{
  render(){
    return(
      <div>
        <ul className="nav-list">
          <li className="list-item"><Link to="/" >Home</Link></li>
          <li className="list-item">Reservations</li>
          <li className="list-item"><Link to="/menu" >Menu</Link></li>
        </ul>
      </div>
    )
  }
}
export default SideMenu
