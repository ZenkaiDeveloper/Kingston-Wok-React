import React from 'react';
import '../../../styles/Categories.css'

class ChefSpecials extends React.Component{
  render(){
    return(
      <div id="chefs-special" className="category-introduction Chef">
        <h2 style={{marginTop:"2rem"}}>Chef's Special Suggestions</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>

            {this.props.listItem("C1. Seafood Deluxe"," ",16.50.toPrecision(4))}
            <tr>
              <td className="chef-description" colspan="3"><small>Assorted seafood including mussel, prawns, scallops, squid and seasonal vegetables sauteed in a white wine sauce.</small></td>
            </tr>


            {this.props.listItem("C2. Crispy Prawns w. Walnuts"," ",16.95)}
            <tr>
              <td className="chef-description" colspan="3"><small>Fried jumbo shrimp with honey walnuts served with a light touch of sweet and sour sauce.</small></td>
            </tr>

            {this.props.listItem("C3. Happy Family"," ",14.95)}
            <tr>
              <td className="chef-description" colspan="3"><small>Chicken, shrimp, beef, and pork sauteed with fresh mixed vegetables.</small></td>
            </tr>

            {this.props.listItem("C4. General Tso's Seafood"," ",16.95, true)}
            <tr>
              <td className="chef-description" colspan="3"><small>Crispy fried assorted seafood including prawns, scallops, and broccoli sauteed in the chef's special spicy sauce.</small></td>
            </tr>


            {this.props.listItem("C5. Chicken and Beef Hunan Style"," ",14.25, true)}
            <tr>
              <td className="chef-description" colspan="3"><small>Sliced white meat chicken and tender juicy beef, first marinated, then sauteed with a variety of Chinese vegetables in a Hunan sauce.</small></td>
            </tr>


            {this.props.listItem("C6. Triple Delight"," ",14.95, true)}
            <tr>
              <td className="chef-description" colspan="3"><small>Chicken, beef, and shrimp with fresh vegetables in a spicy garlic sauce.</small></td>
            </tr>

            {this.props.listItem("C7. Orange Two Flavor"," ",14.95, true)}
            <tr>
              <td className="chef-description" colspan="3"><small>Deep fried crispy beef and chicken sauteed with our exclusive orange sauce.</small></td>
            </tr>

            {this.props.listItem("C8. Vegitarian Four Seasons"," ",11.95)}
            <tr>
              <td className="chef-description" colspan="3"><small>Asparagus, broccoli, eggplant and snowpeas sauteed in chef's special garlic sauce.</small></td>
            </tr>

            {this.props.listItem("C9. Orange Flavor Duck"," ",18.95)}
            <tr>
              <td className="chef-description" colspan="3"><small>Crispy roasted duck with our chef's special orange sauce.</small></td>
            </tr>

          </tbody>
        </table>
        <h2 style={{marginTop:"2rem"}}>Revolution Diet</h2>
      </div>
    )
  }
}

export default ChefSpecials
