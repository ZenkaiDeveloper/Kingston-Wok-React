import React from 'react';
import Header from './Header';
import '../styles/ChineseMenu.css';
import Appetizers from './Categories/SouthEast/Appetizers'
import Soups from './Categories/SouthEast/Soups'
import NoodlesAndRice from './Categories/SouthEast/NoodlesAndRice'
import Entrees from './Categories/SouthEast/Entrees'
import Special from './Categories/SouthEast/Special'


class SouthEastMenu extends React.Component{
  constructor(props) {
    super(props);
    this.Appetizers = React.createRef();
    this.Soups = React.createRef();
    this.Noodles = React.createRef();
    this.Entrees = React.createRef();
    this.Special = React.createRef();
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
      <div className="southeast-menu">
        <Header />
        <div className="header-spacer"></div>
        <select className="category-select" onChange={this.changeHandler} value={this.state.category}>
          <option value="Appetizers">Appetizers</option>
          <option value="Soups">Soups</option>
          <option value="Noodles">Noodles and Rice</option>
          <option value="Entrees">Entrees</option>
          <option value="Special">House Special</option>
        </select>
        <div ref={this.Appetizers}>
          <Appetizers listItem={this.listFoodItem} />
        </div>

        <div ref={this.Soups}>
          <Soups listItem={this.listFoodItem} />
        </div>

        <div ref={this.Noodles}>
          <NoodlesAndRice listItem={this.listFoodItem} />
        </div>

        <div ref={this.Entrees}>
          <Entrees listItem={this.listFoodItem} />
        </div>

        <div ref={this.Special}>
          <Special listItem={this.listFoodItem} />
        </div>



      </div>
    )
  }
}

export default SouthEastMenu
