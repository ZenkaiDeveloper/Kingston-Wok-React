import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Header.css';
import SideMenu from './SideMenu';


class Header extends React.Component{
  state={
    burgerClicked:false,
    showMenu:false
  }
  burgerClick = (e) => {
    this.setState({
      burgerClicked: !this.state.burgerClicked
    }, ()=>{
      if (this.state.showMenu) {
        this.setState({
          showMenu: false
        })
      }else{
        setTimeout(()=>{
          this.setState({
            showMenu:!this.state.showMenu
          })
        }, 300)
      }
    })
  }

  animateBurger = () => {
    if (this.state.burgerClicked) {
      return "animate-burger"
    }
  }

  animateBurgerDivOne = () => {
    if (this.state.burgerClicked) {
      return "animate-burger-div-one"
    }
  }

  animateBurgerDivTwo = () => {
    if (this.state.burgerClicked) {
      return "animate-burger-div-two"
    }
  }

  animateBurgerDivThree = () => {
    if (this.state.burgerClicked) {
      return "animate-burger-div-three"
    }
  }

  displayMenu = () => {
    if (this.state.showMenu) {
      return <SideMenu />
    }
  }



  render(){
    return(
      <header>
      <Link className="home-link" to="/">
        <div className="brand">
        Kingston Wok
        </div>
      </Link>
        <div id="burger-container">
          <div className={this.animateBurger()} onClick={this.burgerClick} id = "burger">
            <div className={this.animateBurgerDivOne()}  ></div>
            <div className={this.animateBurgerDivTwo()}></div>
            <div className={this.animateBurgerDivThree()} ></div>
          </div>
        </div>
        {this.displayMenu()}
      </header>
    )
  }
}

export default Header
