import React from 'react';
import '../../../styles/Categories.css'

class Appetizers extends React.Component{

  render(){
    return(
      <div className=" category-introduction southeast-appetizers" >
        <h2>South East Appetizers</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Thai Chicken Egg Roll"," ", 6.15)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Chicken, bean curd, cabbage, carrot, and glass noodles. Served with sweet and spicy sauce.</small></td>
            </tr>

            {this.props.listItem("Golden Crispy Tofu"," ", 5.95)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Served with peanut sauce.</small></td>
            </tr>

            {this.props.listItem("Malaysian Chicken Satay"," ", 6.15)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Chicken skewers served with cucumber and spicy curry peanut sauce.</small></td>
            </tr>

            {this.props.listItem("Coconut Shrimp"," ", 7.45)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Served with Thai green chili sauce.</small></td>
            </tr>

            {this.props.listItem("Thai Style House Salad"," ", 6.15)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Glass noodles, onion, carrot, celery, tomatoes, mango, cucumber, green and red peppers with crushed peanut spicy Thai herbs, lemongrass and lime juice dressing.</small></td>
            </tr>


          </tbody>
        </table>

      </div>
    )
  }
}

export default Appetizers
