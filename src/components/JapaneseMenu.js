import React from 'react';
import Header from './Header';
import '../styles/ChineseMenu.css';
import Soups from './Categories/Japanese/Soups'
import Appetizers from './Categories/Japanese/Appetizers'
import Makis from './Categories/Japanese/Makis'
import HouseSpecial from './Categories/Japanese/HouseSpecial'
import Nigiri from './Categories/Japanese/Nigiri'
import Combos from './Categories/Japanese/Combos'

class JapaneseMenu extends React.Component{
  constructor(props) {
    super(props);
    this.Soups = React.createRef();
    this.Appetizers = React.createRef();
    this.Maki = React.createRef();
    this.HouseSpecial = React.createRef();
    this.Nigiri = React.createRef();
    this.Combos = React.createRef();
  }

  state={
    category: ""
  }

  changeHandler = (e) => {
    this.setState({
      category: e.target.value
    }, ()=>{
      window.scrollTo({
        top:this[this.state.category].current.offsetTop - 100,
        behavior:'smooth'
      })
    })
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
          <option value="Soups">Soups</option>
          <option value="Appetizers">Appetizers and Salads</option>
          <option value="Maki">Maki Rolls</option>
          <option value="HouseSpecial">House Special Rolls</option>
          <option value="Nigiri">Nigiri and Sashimi (Two Pieces)</option>
          <option value="Combos">Special Combination Sushi & Rolls</option>
        </select>
        <div ref={this.Soups}>
          <Soups listItem={this.listFoodItem} />
        </div>

        <div ref={this.Appetizers}>
          <Appetizers listItem={this.listFoodItem} />
        </div>

        <div ref={this.Maki}>
          <Makis listItem={this.listFoodItem} />
        </div>

        <div ref={this.HouseSpecial}>
          <HouseSpecial listItem={this.listFoodItem} />
        </div>

        <div ref={this.Nigiri} >
          <Nigiri listItem={this.listFoodItem} />
        </div>

        <div ref={this.Combos} >
          <Combos listItem={this.listFoodItem} />
        </div>

      </div>
    )
  }
}

export default JapaneseMenu
