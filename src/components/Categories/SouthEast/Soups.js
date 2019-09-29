import React from 'react';
import '../../../styles/Categories.css'

class Soups extends React.Component{

  render(){
    return(
      <div className=" category-introduction japanese-soups" >
        <h2>South East Soups</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Tom Yum Kong"," ", 9.15)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Thai hot and sour shrimp soup with leomongrass, lime juice, bell peppers, mushrooms and onions.</small></td>
            </tr>


            {this.props.listItem("Spicy Thai Coconut Chicken Soup"," ", 9.15)}


          </tbody>
        </table>

      </div>
    )
  }
}

export default Soups
