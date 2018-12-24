import React from 'react';
import '../../../styles/Categories.css'

class NoodlesAndRice extends React.Component{

  render(){
    return(
      <div className=" category-introduction southeast-noodles-and-rice" >
        <h2>South East Noodles and Rice</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Thai Pineapple Fried Rice"," ", 10.95)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Chicken, shrimp, pineapple, onions, peas, and egg in a special curry sauce.</small></td>
            </tr>


            {this.props.listItem("Indian Mee Goreng"," ", 9.95)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Egg noodles with vegetables and tofu in chefs special Indian curry sauce.</small></td>
            </tr>

            {this.props.listItem("Singapore Mei Fun"," ", 12.25)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Thin rice noodles with chicken, shrimp, vegetables, and eggs in a curry sauce.</small></td>
            </tr>


            {this.props.listItem("Pad Thai"," ", 12.50.toPrecision(4))}
            <tr>
              <td className="chef-description" colSpan="3"><small>Thin Thai rice noodles with shrimp, chicken, bean sprout, onion and eggs in a Thai peanut spicy sauce.</small></td>
            </tr>


          </tbody>
        </table>

      </div>
    )
  }
}

export default NoodlesAndRice
