import React from 'react';
import Header from './Header';
import '../styles/ChineseMenu.css';
import { Redirect } from 'react-router-dom'
import Soups from './Categories/Chinese/Soups'
import Appetizers from './Categories/Chinese/Appetizers'
import LoAndChow from './Categories/Chinese/LoAndChow'
import FriedRice from './Categories/Chinese/FriedRice'
import ChowAndMeiFun from './Categories/Chinese/ChowAndMeiFun'
import EggFooYoung from './Categories/Chinese/EggFooYoung'
import Poultry from './Categories/Chinese/Poultry'
import Beef from "./Categories/Chinese/Beef"
import Pork from "./Categories/Chinese/Pork"

class ChineseMenu extends React.Component{
  state={
    category: ""
  }

  changeHandler = (e) => {
    this.setState({
      category: e.target.value
    })
    this.props.history.push("/menu/chinese/#EggFooYoung")
  }

  listFoodItem = (name, ptPrice, qtPrice = " ", spice = false) => {
    if (spice) {
      return(
        <tr className="item-row">
          <td className="item-name spicy"><i className="fas spicy fa-fire"></i> {name}</td>
          <td className="spicy">{ptPrice}</td>
          <td className="spicy">{qtPrice}</td>
        </tr>
      )
    }
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
        <Appetizers listApp={this.listFoodItem}/>
        <LoAndChow listNoodle={this.listFoodItem} />
        <FriedRice listRice={this.listFoodItem} />
        <ChowAndMeiFun listNoodle={this.listFoodItem} />
        <div id="EggFooYoung">
        <EggFooYoung listItem={this.listFoodItem} />
        </div>
        <Poultry  listItem={this.listFoodItem} />
        <Beef listItem={this.listFoodItem} />
        <Pork listItem={this.listFoodItem} />
      </div>
    )
  }
}

export default ChineseMenu
