import React from 'react';
import '../../../styles/Categories.css'

class Soups extends React.Component{

  render(){
    return(
      <div className=" category-introduction japanese-soups" >
        <h2>Japanese Soups</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Miso Soup"," ", 2.95)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Soy bean paste, wakame, tofu and scallion soup.</small></td>
            </tr>


            {this.props.listItem("Shrimp Clear Soup"," ", 4.25)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Shrimp, Mushrooms and Vegetables in a clear broth.</small></td>
            </tr>

            {this.props.listItem("Seafood Miso Soup"," ", 8.50.toPrecision(3))}
            <tr>
              <td className="chef-description" colSpan="3"><small>Shrimp, Scallop, Crab, Tofu, Wakame and Scallion for 2.</small></td>
            </tr>

          </tbody>
        </table>

      </div>
    )
  }
}

export default Soups
