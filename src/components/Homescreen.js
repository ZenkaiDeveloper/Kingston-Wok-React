import React, { Component } from 'react';
import Header from './Header'
import SideMenu from './SideMenu'
import '../styles/Homescreen.css'
import chineseNoodle from '../Images/chinese-noodle.jpg'
import HomePageInfo from './HomePageInfo'


class Homescreen extends Component{
  render(){
    return(
      <div className="homescreen">
        <Header/>
        <div className="location-info">
          <p>1353 Ulster Ave. Kingston, NY 12401</p>
          <p>845-336-6979</p>
        </div>
        <SideMenu />
        <div className="showcase">
          <img className="show-img" src={chineseNoodle} />
        </div>
        <HomePageInfo />

      </div>
    )
  }
}

export default Homescreen
