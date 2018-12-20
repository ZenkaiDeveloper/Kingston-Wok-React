import React from 'react';
import Header from './Header'
import '../styles/ChineseMenu.css'


class ChineseMenu extends React.Component{
  state={
    category: ""
  }

  changeHandler = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  render(){
    console.log(this.state.category)
    return(
      <div>
        <Header />
        <div className="header-spacer"></div>
        <select className="category-select" onChange={this.changeHandler} value={this.state.category}>
          <option value="Soup">Soups</option>
          <option value="Appetizers">Appetizers</option>
          <option value="Lo Mein Chow Mein">Lo Mein/Chow Mein</option>
        </select>
      </div>
    )
  }
}

export default ChineseMenu
