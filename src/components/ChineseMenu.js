import React from 'react';
import Header from './Header';
import '../styles/ChineseMenu.css';
import Soups from './Categories/Soups'


class ChineseMenu extends React.Component{
  state={
    category: ""
  }

  changeHandler = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  listFoodItem = (name, ptPrice, qtPrice) => {
    return(
      <tr className="item-row">
        <td className="item-name">{name}</td>
        <td>{ptPrice}</td>
        <td>{qtPrice}</td>
      </tr>
    )
  }

  render(){
    console.log(this.state.category)
    return(
      <div className="chinese-menu">
        <Header />
        <div className="header-spacer"></div>
        <select className="category-select" onChange={this.changeHandler} value={this.state.category}>
          <option value="Soup">Soups</option>
          <option value="Appetizers">Appetizers</option>
          <option value="Lo Mein Chow Mein">Lo Mein/Chow Mein</option>
          <option value="Fried Rice">Fried Rice</option>
          <option value="Chow Fun/Mei Fun">Chow Fun/Mei Fun</option>
          <option value="Egg Foo Young">Egg Foo Young</option>
          <option value="Poultry">Poultry</option>
          <option value="Beef">Beef</option>
          <option value="Pork">Pork</option>
          <option value="Seafood">Seafood</option>
          <option value="Vegetable">Vegetable Dishes</option>
          <option value="Chefs Special">Chefs Special</option>
        </select>
        <Soups listSoup={this.listFoodItem}/>
      </div>
    )
  }
}

export default ChineseMenu
