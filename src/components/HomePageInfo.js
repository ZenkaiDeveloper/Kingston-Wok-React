import React, { Component } from 'react';
import '../styles/HomePageInfo.css';
import EntrancePic from '../Images/kingston-landing.jpg';
import DiningPic from "../Images/black-background-bowl.jpg"

class HomePageInfo extends Component{
  render(){
    return(
      <section className="info">
          <div className="info-wrapper">
          <div className="empty-info">
            <h1>Reservations</h1>
          </div>
            <div className="entrance-photo">
              <img src={EntrancePic} alt="Kingston wok entrance"/>
            </div>
            <div className="reservation-info">
              <p>Call in to reserve a table for up to 10 people.</p>
              <button className="reservation-btn">Book A Table</button>
            </div>

            <div className="about-photo">
              <img src={DiningPic} alt="Customers Dining"/>
            </div>
            <div className="about-info">
              <h1>About Us</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
      </section>
    )
  }
}

export default HomePageInfo
