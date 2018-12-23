import React from 'react';
import '../../../styles/Categories.css'

class Makis extends React.Component{

  render(){
    return(
      <div className=" category-introduction japanese-makis" >
        <h2>Maki Rolls (Hand Roll Options Available)</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area">Cooked</th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("California Roll(Crab, avacado, and cucumber)"," ", 5.25)}
            {this.props.listItem("Sweet Potato Tempura Avacado Roll"," ", 5.25)}
            {this.props.listItem("Avacado Roll"," ", 4.25)}
            {this.props.listItem("Oshinko Roll(Yellow Radish)"," ", 3.75)}
            {this.props.listItem("Kappa Maki(Cucumber Roll)"," ", 3.75)}
            {this.props.listItem("Kampyo Maki(Pickled Squash)"," ", 3.50.toPrecision(3))}
            {this.props.listItem("Alaskan Roll"," ", 5.50.toPrecision(3))}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Smoked Salmon and Cucumber.</small></td>
            </tr>
            {this.props.listItem("Boston Roll"," ", 5.25)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Shrimp, lettuce and mayo.</small></td>
            </tr>
            {this.props.listItem("New York Roll (Crab, apple)"," ", 4.95)}
            {this.props.listItem("Vegetable Roll"," ", 4.75)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Pickled squash, cucumber, avacado, and oshinko.</small></td>
            </tr>

            {this.props.listItem("Shitake Mushroom and Avacado Roll"," ", 4.75)}
            {this.props.listItem("Eel Cucumber Roll"," ", 5.75)}
            {this.props.listItem("Eel Avacado Roll"," ", 5.95)}
            {this.props.listItem("Green River Roll"," ", 6.25)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Eel, cucumber, and avacado.</small></td>
            </tr>


          </tbody>
        </table>



        <table style={{marginTop:"3rem"}}>
          <thead>
            <tr>
              <th className="item-area">Raw</th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Tekka Roll(Tuna)"," ", 5.25)}
            {this.props.listItem("Sake  Roll(Salmon)"," ", 5.25)}
            {this.props.listItem("Hamachi Negi Roll(Yellowtail)"," ", 5.25)}
            {this.props.listItem("Philidelphia Roll"," ", 5.75)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Salmon, cream cheese & scallion.</small></td>
            </tr>
            {this.props.listItem("Kani-Kama Maki(Cucumber Roll)"," ", 6.25)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>Crab, flyinf fish eggs and spicy mayo.</small></td>
            </tr>
            {this.props.listItem("Spicy Tuna or Salmon Roll"," ", 6.25)}
            {this.props.listItem("Spicy Yellowtail Scallion Roll"," ", 6.25)}




          </tbody>
        </table>

      </div>
    )
  }
}

export default Makis
