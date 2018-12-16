import React, { Component } from 'react';
import Header from './Header'
import '../styles/Homescreen.css'
import chineseNoodle from '../Images/chinese-noodle.jpg'
import HomePageInfo from './HomePageInfo'


class Homescreen extends Component{
  render(){
    return(
      <div className="homescreen">
        <Header/>
        <div className="header-spacer"></div>
        <div className="location-info">
          <p><i className="fas fa-map"></i> 1353 Ulster Ave. Kingston, NY 12401</p>
          <p><i className="fas fa-phone"></i> 845-336-6979</p>
        </div>
        <div className="showcase">
          <img alt="chinese noodles" className="show-img" src={chineseNoodle} />
        </div>
        <HomePageInfo />
      </div>
    )
  }
}

export default Homescreen
