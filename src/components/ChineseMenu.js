import React from 'react';
import Header from './Header';
import '../styles/ChineseMenu.css';
import Soups from './Categories/Chinese/Soups'
import Appetizers from './Categories/Chinese/Appetizers'
import LoAndChow from './Categories/Chinese/LoAndChow'
import FriedRice from './Categories/Chinese/FriedRice'
import ChowAndMeiFun from './Categories/Chinese/ChowAndMeiFun'
import EggFooYoung from './Categories/Chinese/EggFooYoung'
import Poultry from './Categories/Chinese/Poultry'
import Beef from "./Categories/Chinese/Beef"
import Pork from "./Categories/Chinese/Pork"
import Seafood from "./Categories/Chinese/Seafood"
import Vegetables from "./Categories/Chinese/Vegetables"
import Chef from "./Categories/Chinese/Chef"

class ChineseMenu extends React.Component{
  constructor(props) {
    super(props);
    this.Soups = React.createRef();
    this.Appetizers = React.createRef();
    this.LoAndChow = React.createRef();
    this.FriedRice = React.createRef();
    this.ChowAndMeiFun = React.createRef();
    this.EggFooYoung = React.createRef();
    this.Poultry = React.createRef();
    this.Beef = React.createRef();
    this.Pork = React.createRef();
    this.Seafood = React.createRef();
    this.Vegetables = React.createRef();
    this.Chef = React.createRef();
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
          <option value=""> </option>
          <option value="Soups">Soups</option>
          <option value="Appetizers">Appetizers</option>
          <option value="LoAndChow">Lo Mein/Chow Mein</option>
          <option value="FriedRice">Fried Rice</option>
          <option value="ChowAndMeiFun">Chow Fun/Mei Fun</option>
          <option value="EggFooYoung">Egg Foo Young</option>
          <option value="Poultry">Poultry</option>
          <option value="Beef">Beef</option>
          <option value="Pork">Pork</option>
          <option value="Seafood">Seafood</option>
          <option value="Vegetables">Vegetable Dishes</option>
          <option value="Chefs Special">Chefs Special</option>
        </select>
        <div ref={this.Soups}>
          <Soups listSoup={this.listFoodItem}/>
        </div>
        <div ref={this.Appetizers}>
          <Appetizers listApp={this.listFoodItem}/>
        </div>
        <div ref={this.LoAndChow}>
          <LoAndChow listNoodle={this.listFoodItem} />
        </div>
        <div ref={this.FriedRice}>
          <FriedRice listRice={this.listFoodItem} />
        </div>
        <div ref={this.ChowAndMeiFun}>
          <ChowAndMeiFun listNoodle={this.listFoodItem} />
        </div>
        <div ref={this.EggFooYoung} id="EggFooYoung">
          <EggFooYoung listItem={this.listFoodItem} />
        </div>
        <div ref={this.Poultry}>
          <Poultry  listItem={this.listFoodItem} />
        </div>
        <div ref={this.Beef}>
          <Beef listItem={this.listFoodItem} />
        </div>
        <div ref={this.Pork}>
          <Pork listItem={this.listFoodItem} />
        </div>
        <div ref={this.Seafood}>
          <Seafood listItem={this.listFoodItem} />
        </div>
        <div ref={this.Vegetables}>
          <Vegetables listItem={this.listFoodItem} />
        </div>
        <div ref={this.Chef}>
          <Chef listItem={this.listFoodItem} />
        </div>
      </div>
    )
  }
}

export default ChineseMenu
