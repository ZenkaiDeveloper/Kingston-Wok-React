import React from 'react';
import '../../../styles/Categories.css'

class Beef extends React.Component{
  pintBase = 8.00;
  quartBase = 11.50;
  render(){
    return(
      <div className=" category-introduction Beef" >
        <h2 style={{marginTop:"2rem"}}>Beef</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint">Pt.(16oz)</th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Qt.(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Beef with Mixed Vegetables",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4))}
            {this.props.listItem("Beef with Broccoli",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4))}
            {this.props.listItem("Pepper Steak",this.pintBase.toPrecision(3), this.quartBase.toPrecision(4))}
            {this.props.listItem("Beef with Garlic Sauce",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4), true)}
            {this.props.listItem("Beef Szechuan Style",this.printBase, this.quartBase.toPrecision(4), true)}
            {this.props.listItem("Beef with Hot Pepper Sauce w. Peanuts",this.pintBase.toPrecision(3),  this.quartBase.toPrecision(4), true)}
            {this.props.listItem("Orange Beef","N/A",  (this.quartBase+1.7).toPrecision(4))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Beef
