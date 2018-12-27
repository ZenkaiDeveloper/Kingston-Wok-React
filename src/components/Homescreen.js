import React, { Component } from 'react';
import Header from './Header'
import '../styles/Homescreen.css'
import chineseNoodle from '../Images/chinese-noodle.jpg'
import sushiImg from '../Images/Sushi.jpg'
import HomePageInfo from './HomePageInfo'


class Homescreen extends Component{
  state={
    x: (window.innerWidth/2) * .95,
    skew:1000,
    delta:0
  }
  changeHandler = (event) => {
    console.log("X Value :", event.screenX, "Y value: ",event.screenY)
    this.setState({
      x:event.clientX,
      delta: (event.clientX - window.innerWidth/2) * 0.3
    })
  }
  render(){
    return(
      <div className="homescreen">
        <Header/>
        <div className="header-spacer"></div>
        <div className="location-info">
          <p><i className="fas fa-map"></i> 1353 Ulster Ave. Kingston, NY 12401</p>
          <p><i className="fas fa-phone"></i> 845-336-6979</p>
        </div>

        <section onMouseMove={this.changeHandler} className="showcase">
          <img alt="Chinese Noodles" className="show-img-mobile" src={chineseNoodle} />

           <h1 className="catcher">Asian Fusion Restaurant</h1>
           <div className="layer bottom">
             <div className="content-wrap">
               <div className="content-body">
                 <h1>Chinese Cusine</h1>
                 <p>Enjoy classic chinese flavors.</p>
               </div>
               <img alt="Chinese Noodles" className="show-img" src={chineseNoodle} />
             </div>
           </div>
           <div style={{width:`${this.state.x + this.state.skew + this.state.delta}px`}} className="layer top">
             <div className="content-wrap">
               <div className="content-body">
                 <h1>Japanese Cusine</h1>
                 <p>Take your tastebuds on a journey through Japan.</p>
               </div>
               <img alt="Japanese Sashimi" className="show-img2" src={sushiImg} />
             </div>
           </div>
           <div style={{left:`${this.state.x + this.state.delta}px`}} className="handle"></div>
        </section>
        <HomePageInfo />
      </div>
    )
  }
}

export default Homescreen
