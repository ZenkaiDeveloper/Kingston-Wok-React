import React from 'react';
import '../../../styles/Categories.css'

class HouseSpecial extends React.Component{

  render(){
    return(
      <div className=" category-introduction japanese-makis" >
        <h2>House Special Rolls</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"> </th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Tropical Seafood Roll"," ", 7.25)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Mango, seafood, honey spicy lemon sauce.</small></td>
            </tr>
            {this.props.listItem("T.N.T. Roll"," ", 7.25)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Tuna, seaweed salad, wasabi and orange tobiko.</small></td>
            </tr>
            {this.props.listItem("Shrimp Tempura Roll"," ", 7.50.toPrecision(3))}
            {this.props.listItem("Dragon Roll"," ", 11.95)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Smoked eel, cucumber and topped with avacado & tobiko.</small></td>
            </tr>
            {this.props.listItem("Sweet and Spicy Red Head Roll"," ", 11.95)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Crab, cucumber, avacado and crunch. Topped with spicy tuna and special sweet and spicy miso sauce.</small></td>
            </tr>

            {this.props.listItem("Rainbow Roll"," ", 11.95)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>California Roll topped with a variety of raw fish.</small></td>
            </tr>

            {this.props.listItem("Dynamite Roll"," ", 13.25)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Spicy tuna, topped with tuna, smoked spicy sauce, fying fish egg and scallion.</small></td>
            </tr>

            {this.props.listItem("Why Not Roll??"," ", 13.25)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Spicy crab salad roll, topped with seared tuna, whitetuna, miso & honey wasabi sauce.</small></td>
            </tr>

            {this.props.listItem("Road to the Heaven Roll"," ", 15.95)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Shrimp tempura and salmon roll, topped with avacado, crabmeat, spicy mayo and sweet soy sauce.</small></td>
            </tr>
          </tbody>
        </table>





      </div>
    )
  }
}

export default HouseSpecial
