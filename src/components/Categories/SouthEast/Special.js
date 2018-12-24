import React from 'react';
import '../../../styles/Categories.css'

class Special extends React.Component{

  render(){
    return(
      <div className=" category-introduction southeast-entrees" >
        <h2>South East House Specials</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Crispy Red Snapper Fillet with Thai Sweet and Spicy Garlic Chili Sauce"," ", 17.50.toPrecision(4))}
            {this.props.listItem("Pan Seared Salmon with Spicy Basil Ginger Black Bean Sauce"," ", 17.25)}
            {this.props.listItem("Thai Spicy Basil Bean Sauce With Chicken & Shrimp"," ", 16.95)}
            {this.props.listItem("Cashew Seafood With Light Spicy Garlic Ginger Sauce"," ", 16.95)}
          </tbody>
        </table>

      </div>
    )
  }
}

export default Special
