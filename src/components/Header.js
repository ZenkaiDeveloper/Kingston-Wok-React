import React from 'react';
import '../styles/Header.css'

class Header extends React.Component{
  render(){
    return(
      <header>
        <div className="brand">
        Kingston Wok
        </div>
        <div id="burger-container">
          <div id = "burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
