import React from 'react';
import '../../../styles/Categories.css'

class Seafood extends React.Component{
  pintBase = 8.50;
  quartBase = 12.50;
  render(){
    return(
      <div className=" category-introduction Seafood" >
        <h2 style={{marginTop:"2rem"}}>Seafood</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint">Pt.(16oz)</th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Qt.(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Shrimp with Broccoli",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4))}
            {this.props.listItem("Shrimp with Mixed Vegetables",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4))}
            {this.props.listItem("Shrimp with Lobster Sauce",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4))}
            {this.props.listItem("Shrimp with Garlic Sauce",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4), true)}
            {this.props.listItem("Shrimp with Hot Pepper Sauce and Peanuts",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4), true)}
            {this.props.listItem("Shrimp with Cashew Nuts",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4))}
            {this.props.listItem("Scallops with Garlic Sauce","N/A",  (this.quartBase+3.70).toPrecision(4), true)}
            {this.props.listItem("Scallops with Broccoli","N/A",  (this.quartBase+3.70).toPrecision(4))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Seafood
