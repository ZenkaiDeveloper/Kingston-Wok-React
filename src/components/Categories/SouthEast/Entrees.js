import React from 'react';
import '../../../styles/Categories.css'

class Entrees extends React.Component{

  render(){
    return(
      <div className=" category-introduction southeast-entrees" >
        <h2>South East Entrees</h2>
        <p>Choice of - Chicken, Beef, Vegetable, or Shrimp(extra $2.00)</p>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Basil and Ginger Stir Fry"," ", 13.80.toPrecision(4))}
            {this.props.listItem("Garlic Black Pepper with Thai Fish Sauce"," ", 13.80.toPrecision(4))}
            {this.props.listItem("Thai Green Curry with Coconut Milk"," ", 14.60.toPrecision(4))}
            {this.props.listItem("Malaysian Red Curry with Coconut Milk"," ", 14.60.toPrecision(4))}
          </tbody>
        </table>

      </div>
    )
  }
}

export default Entrees
