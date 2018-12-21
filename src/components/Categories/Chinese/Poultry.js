import React from 'react';
import '../../../styles/Categories.css'

class Poultry extends React.Component{
  pintBase = 7.50;
  quartBase = 10.95;
  render(){
    return(
      <div className=" category-introduction Poultry" >
        <h2 style={{marginTop:"2rem"}}>Poultry</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint">Pt.(16oz)</th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Qt.(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Moo Shu Chicken(w. 4 Pancakes)"," ",  this.quartBase)}
            {this.props.listItem("Chicken w. Broccoli",this.pintBase.toPrecision(3),  this.quartBase)}
            {this.props.listItem("Moo Goo Gai Pan",this.pintBase.toPrecision(3),  this.quartBase)}
            {this.props.listItem("Chicken w. Mixed Vegetables",this.pintBase.toPrecision(3),  this.quartBase)}
            {this.props.listItem("Chicken with Cashew Nuts",this.pintBase.toPrecision(3),  this.quartBase)}
            {this.props.listItem("Chicken with Hot Pepper Sauce w. Peanuts",this.pintBase.toPrecision(3),  this.quartBase, true)}
            {this.props.listItem("Chicken with Garlic Sauce",this.pintBase.toPrecision(3),  this.quartBase, true)}
            {this.props.listItem("Chicken with Black Bean Sauce",this.pintBase.toPrecision(3),  this.quartBase)}
            {this.props.listItem("Sweet and Sour Chicken",this.pintBase.toPrecision(3),  this.quartBase)}
            {this.props.listItem("Chicken and Shrimp Combination",this.pintBase.toPrecision(3),  (this.quartBase+.3).toPrecision(4))}
            {this.props.listItem("General Tso's Chicken","N/A",  (this.quartBase+1).toPrecision(4), true)}
            {this.props.listItem("Sesame Chicken","N/A",  (this.quartBase+1).toPrecision(4))}
            {this.props.listItem("Chicken with Eggplant","N/A",  (this.quartBase+.3).toPrecision(4))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Poultry
