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

            {this.props.listItem("C1. Seafood Deluxe"," ",17.05.toPrecision(4))}
            <tr>
              <td className="chef-description" colSpan="3"><small>Assorted seafood including mussel, prawns, scallops, squid and seasonal vegetables sauteed in a white wine sauce.</small></td>
            </tr>


            {this.props.listItem("C2. Crispy Prawns w. Walnuts"," ",17.50.toPrecision(4))}
            <tr>
              <td className="chef-description" colSpan="3"><small>Fried jumbo shrimp with honey walnuts served with a light touch of sweet and sour sauce.</small></td>
            </tr>

            {this.props.listItem("C3. Happy Family"," ",15.50.toPrecision(4))}
            <tr>
              <td className="chef-description" colSpan="3"><small>Chicken, shrimp, beef, and pork sauteed with fresh mixed vegetables.</small></td>
            </tr>

            {this.props.listItem("C4. General Tso's Seafood"," ",17.50.toPrecision(4), true)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Crispy fried assorted seafood including prawns, scallops, and broccoli sauteed in the chef's special spicy sauce.</small></td>
            </tr>


            {this.props.listItem("C5. Chicken and Beef Hunan Style"," ",14.80.toPrecision(4), true)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Sliced white meat chicken and tender juicy beef, first marinated, then sauteed with a variety of Chinese vegetables in a Hunan sauce.</small></td>
            </tr>


            {this.props.listItem("C6. Triple Delight"," ",15.50.toPrecision(4), true)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Chicken, beef, and shrimp with fresh vegetables in a spicy garlic sauce.</small></td>
            </tr>

            {this.props.listItem("C7. Orange Two Flavor"," ",15.50.toPrecision(4), true)}
            <tr>
              <td className="chef-description" colSpan="3"><small>Deep fried crispy beef and chicken sauteed with our exclusive orange sauce.</small></td>
            </tr>

            {this.props.listItem("C8. Vegitarian Four Seasons"," ",12.50.toPrecision(4))}
            <tr>
              <td className="chef-description" colSpan="3"><small>Asparagus, broccoli, eggplant and snowpeas sauteed in chef's special garlic sauce.</small></td>
            </tr>

            {this.props.listItem("C9. Orange Flavor Duck"," ",19.50.toPrecision(4))}
            <tr>
              <td className="chef-description" colSpan="3"><small>Crispy roasted duck with our chef's special orange sauce.</small></td>
            </tr>

          </tbody>
        </table>
        <h2 style={{marginTop:"2rem"}}>Revolution Diet</h2>
        <p className="revolution-description">Cooked without oil & cornstarch. All dishes have been adapeted by our diet counselors. Their recommendations call for no oil at emphasis on vegetable Al Dente. Use of bean sprouts to replace rice and greater contrast in cooking style and seasoning.</p>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("R1. Lemon Flavored Chicken with Broccoli & Bean Sprouts"," ",11.95.toPrecision(4))}
            {this.props.listItem("R2. Prawn w. Snow Peas, Broccoli & Bean Sprouts in Spicy Szechuan Style"," ",12.95.toPrecision(4), true)}
            {this.props.listItem("R3. Chicken with Waterchestnuts, Broccoli and Spicy Orange Flavor"," ",11.95.toPrecision(4))}
            {this.props.listItem("R4. Prawns with Broccoli, Mushroom and Moo Shu Seasonings"," ",12.95.toPrecision(4))}
            {this.props.listItem("R5. Buddha Plus Seasame Tofu"," ",11.40.toPrecision(4))}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Snow peas, green beans, baby corn, mushrooms, bean sprouts, broccoli, tofu & sesame.</small></td>
            </tr>
            {this.props.listItem("R6. Scallop with Broccoli and Bean Sprouts in Hot Garlic Sauce"," ",16.40.toPrecision(4), true)}


            {this.props.listItem("R7. Protien Trio"," ",16.40.toPrecision(4), true)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Scallop, chicken, shrimp, with broccoli, snowpease and bean sprouts in a spicy Hunan Sauce.</small></td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }
}

export default ChefSpecials
