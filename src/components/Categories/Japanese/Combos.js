import React from 'react';
import '../../../styles/Categories.css'

class Combos extends React.Component{

  render(){
    return(
      <div className=" category-introduction japanese-makis" >
        <h2>Special Combinations</h2>
        <p>Served with Miso soup and Green Salad</p>
        <table>
          <thead>
            <tr>
              <th className="item-area"> </th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Sushi and Sashimi Combination"," ", 20.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>One California Roll, 6 pieces of Nigiri Sushi and 6 peices of Sashimi as well.</small></td>
            </tr>

            {this.props.listItem("Maki Combination"," ", 15.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>California Roll, Spicy Tuna Roll and a Cucumber Roll.</small></td>
            </tr>

            {this.props.listItem("Sushi Plate A"," ", 16.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>California Roll, 6 peices of Sushi</small></td>
            </tr>

            {this.props.listItem("Sushi Plate B"," ", 19.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>California Roll, 9 peices of Sushi</small></td>
            </tr>

            {this.props.listItem("Chirashi"," ", 18.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Assorted Fish over a Bowl of Rice.</small></td>
            </tr>

            {this.props.listItem("Orange and White Platter"," ", 19.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>3 peices of Salmon, 3 pieces of Yellow Tail, one yellow tail and scallion roll, and one spicy salmon roll.</small></td>
            </tr>


            {this.props.listItem("Sashimi Plate"," ", 19.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Premium cuts if fresh raw fish and seafood.</small></td>
            </tr>

            {this.props.listItem("Tuna Sushi Platter"," ", 19.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>6 peices of Tuna nigiri sushi, tuna roll, and a spicy tuna roll.</small></td>
            </tr>

            {this.props.listItem("Cali Lover"," ", 14.85)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Triple California Rolls</small></td>
            </tr>

            {this.props.listItem("Vegetable Platter"," ", 14.05)}
            <tr>
              <td className="chef-description" colSpan="3"><small>1 Vegetable Roll, 1 shitake Mushroom Avacado Roll and 6 peices of Vegetable Nigiri Sushi.</small></td>
            </tr>

          </tbody>
        </table>





      </div>
    )
  }
}

export default Combos
