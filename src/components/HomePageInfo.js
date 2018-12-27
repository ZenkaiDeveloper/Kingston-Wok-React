import React, { Component } from 'react';
import '../styles/HomePageInfo.css';
import EntrancePic from '../Images/kingston-landing.jpg';
import DiningPic from "../Images/black-background-bowl.jpg";
import DumplingImg from '../Images/dumplings.jpg';
import WokCooking from '../Images/chinese-food.jpg';
import SushiRoll from '../Images/sushi-roll.jpg';
import Shrimp from '../Images/Shrimp.jpg';
import SpringRoll from '../Images/spring-roll.jpg';

class HomePageInfo extends Component{
  render(){
    return(
      <section className="info">
          <div className="info-wrapper">
            <div className="banner"></div>
            <div className="empty-info">
              <h1>Asian Fusion Restaurant</h1>
            </div>
              <div className="entrance-photo">
                <img src={EntrancePic} alt="Kingston wok entrance"/>
              </div>
              <div className="reservation-info">
                <h2>Reservations</h2>
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


            <div style={{background:`url(${DumplingImg})`, backgroundSize: "cover", backgroundAttachment: "fixed"}} className="homepage-menu">
              <h2>Our Menu</h2>
              <div className="specialties-info-wrapper">
              <div className="one">
                <h1 className="menu-intro">Chinese Lunch And Dinner Combos</h1>
                <p className="price">Starting at $5.75</p>
                <p>Lunches combos come with entree and rice.</p>
                <button className="menu-btn">See All Combos</button>
              </div>
              <div className="one-img">
                <img src={WokCooking} alt="Wok Cooking"/>
              </div>
              <div className="two">
                <h1 className="menu-intro">Chef Specials</h1>
                <p className="price">Starting at $5.75</p>
                <p>A variety of large stir fried dishes with veggies and a side of rice.</p>
                <button className="menu-btn">View Specials</button>
              </div>
              <div className="two-img">
                <img src={Shrimp} alt="Shrimp Stir Fry"/>
              </div>
              <div className="three">
                <h1 className="menu-intro">House Special Sushi Rolls</h1>
                <p className="price">Starting at $7.25</p>
                <p>Select from a variety of hand rolled cooked or raw rolls.</p>
                <button className="menu-btn">More Rolls</button>
              </div>
              <div className="three-img">
                <img src={SushiRoll} alt="Spring Fantasy Roll"/>
              </div>
              <div className="four">
                <h1 className="menu-intro">South East Asian Entrees</h1>
                <p className="price">Starting at $5.75</p>
                <p>Entrees come with your choice of Chicken, Beef, Jumbo Shrimp or Vegetable</p>
                <button className="menu-btn">See All Entrees</button>
              </div>
              <div className="four-img">
                <img src={SpringRoll} alt="Spring Roll"/>
              </div>
              </div>

          </div>
      </section>
    )
  }
}

export default HomePageInfo
