import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <button className="reservation-btn"><i className="fas fa-phone"></i> <a href="tel:845-336-6979">845-336-6979</a></button>
              </div>

              <div className="about-photo">
                <img src={DiningPic} alt="Customers Dining"/>
              </div>
              <div className="about-info">
                <h1>About Us</h1>
                <p className="about-paragraph">Kingston Wok is dedicated to serve you fresh food from all across Asia. You can expect traditional Chinese cusines with some that we put a healthier twist on by limiting the cornstarch, MSG, and oil in replacement of natural flavors of our ingridients. The Premium grade Tuna is shipped from NYC twice a week to make fresh sushi, and we also have a wide variety of options from the South East Asian area. We hope that whichever dish your curiosity leads you to try, you will want to come back for more. </p>
              </div>
            </div>


            <div style={{background:`url(${DumplingImg})`, backgroundSize: "cover", backgroundAttachment: "fixed"}} className="homepage-menu">
              <h2>Our Menu</h2>
              <div className="specialties-info-wrapper">
              <div className="one">
                <h1 className="menu-intro">Chinese Lunch And Dinner Combos</h1>
                <p className="price">Starting at $6.25</p>
                <p>Lunches combos come with entree and rice.</p>
                <Link to="/menu/combinations" className="menu-btn">See All Combos</Link>
              </div>
              <div className="one-img">
                <img src={WokCooking} alt="Wok Cooking"/>
              </div>
              <div className="two">
                <h1 className="menu-intro">Chef Specials</h1>
                <p className="price">Starting at $12.50</p>
                <p>A variety of large stir fried dishes with veggies and a side of rice.</p>
                <Link to="/menu/chinese" className="menu-btn">View Specials</Link>
              </div>
              <div className="two-img">
                <img src={Shrimp} alt="Shrimp Stir Fry"/>
              </div>
              <div className="three">
                <h1 className="menu-intro">House Special Sushi Rolls</h1>
                <p className="price">Starting at $7.25</p>
                <p>Select from a variety of hand rolled cooked or raw rolls.</p>
                <Link to="/menu/japanese" className="menu-btn">More Rolls</Link>
              </div>
              <div className="three-img">
                <img src={SushiRoll} alt="Spring Fantasy Roll"/>
              </div>
              <div className="four">
                <h1 className="menu-intro">South East Asian Entrees</h1>
                <p className="price">Starting at $13.80</p>
                <p>Entrees come with your choice of Chicken, Beef, Jumbo Shrimp or Vegetable</p>
                <Link to="/menu/southeast" className="menu-btn">See All Entrees</Link>
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
