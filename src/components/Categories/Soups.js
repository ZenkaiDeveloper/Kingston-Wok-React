import React from 'react';
import '../../styles/Categories.css'

class Soups extends React.Component{
  basicPint = 2.75;
  basicQuart = 4.95;

  listFoodItem
  render(){
    return(
      <div className="soups" >
        <h2>Soup</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint">Pint(16oz)</th>
              <th className="table-headers table-quart">Quart(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listSoup("Egg Drop Soup", this.basicPint, this.basicQuart)}
            {this.props.listSoup("Wonton Soup", this.basicPint, this.basicQuart)}
            {this.props.listSoup("Hot and Sour Soup", this.basicPint, this.basicQuart)}
            {this.props.listSoup("Chicken Rice or Noodle", this.basicPint, this.basicQuart)}
            {this.props.listSoup("Vegetable Bean Curd Soup (For 2)", "N/A", 6.95)}
            {this.props.listSoup("Young Chow Wonton Soup (For 2)", "N/A", 7.95)}
            {this.props.listSoup("Seafood Hot & Sour Soup (For 2)", "N/A", 8.95)}
          </tbody>
          {/*
          BIG BOWLOF CHINATOWN NOODLE SOUP
          2. Dumpling Lover (Choice of Chicken,
          3. Shredded Chicken or Beef With
          Roast Pork & Wontonns
          9.25
          Shitake Mushroom
          9.25*/}
        </table>
        <h2 style={{marginTop:"2rem"}}>Big Bowl of Chinatown Noodle Soup</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listSoup("Roast Pork & Wonton", " ", 9.25)}
            {this.props.listSoup("Dumpling Lover (Choice of Chicken,Pork or Veggies)", " ", 9.25)}
            {this.props.listSoup("Shredded Chicken or Beef With Shitake Mushroom", " ", 9.25)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Soups
