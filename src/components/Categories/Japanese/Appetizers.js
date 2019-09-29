import React from 'react';
import '../../../styles/Categories.css'

class Appetizers extends React.Component{

  render(){
    return(
      <div className=" category-introduction japanese-appetizers" >
        <h2>Japanese Appetizers</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Gyozo(Shrimp Dumplings)"," ", 6.50.toPrecision(3))}
            {this.props.listItem("Shumai(Pork or Shrimp)"," ", 6.15)}
            {this.props.listItem("Avacado Boat"," ", 8.50.toPrecision(3))}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Diced raw fish, avacado, tobiko and spicy mayo.</small></td>
            </tr>
            {this.props.listItem("Edamame(boiled soy bean- peel and eat)"," ", 4.75.toPrecision(3))}

            {this.props.listItem("Sushi Starter(1 kappa maki & 4pcs. Cooked sushi)"," ", 10.15)}
            {this.props.listItem("Sashimi Starter(Chef's selection of premium cuts of raw fish.)"," ", 11.15)}
            {this.props.listItem("Cucumber Salad"," ", 4.15)}
            {this.props.listItem("Spicy Calamari Salad"," ", 8.45)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Calamari, cucumber, mango & seaweed salad with spicy yuzu sauce.</small></td>
            </tr>

            {this.props.listItem("Green Salad(With homemade ginger dressing.)"," ", 4.60.toPrecision(3))}
            {this.props.listItem("Kani Salad(With ponzu sauce.)"," ", 5.60.toPrecision(3))}
            {this.props.listItem("Seaweed Salad"," ", 5.60.toPrecision(3))}
            {this.props.listItem("Seaweed Cucumber Tuna Salad(With spicy honey lemon sauce.)"," ", 9.05.toPrecision(3))}
            {this.props.listItem("Seafood Salad(Cooked)"," ", 9.05.toPrecision(3))}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Crab, shrimp, mango, cucumber & avacado with spicy ponzu sauce.</small></td>
            </tr>


          </tbody>
        </table>

      </div>
    )
  }
}

export default Appetizers
