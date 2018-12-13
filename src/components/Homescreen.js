import React, { Component } from 'react';
import Header from './Header'
import SideMenu from './SideMenu'
import '../styles/Homescreen.css'

class Homescreen extends Component{
  render(){
    return(
      <div style={{height:"100vh"}}>
        <Header/>
        <div className="location-info">
          <p>1353 Ulster Ave. Kingston, NY 12401</p>
          <p>845-336-6979</p>
        </div>
        <SideMenu />

      </div>
    )
  }
}

export default Homescreen
