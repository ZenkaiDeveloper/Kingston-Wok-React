import React from 'react';
import '../../../styles/Categories.css'

class Pork extends React.Component{
  pintBase = 7.50.toPrecision(3);
  quartBase = 10.95;
  render(){
    return(
      <div className=" category-introduction Pork" >
        <h2 style={{marginTop:"2rem"}}>Pork</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint">Pt.(16oz)</th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Qt.(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Roast Pork with Broccoli",this.pintBase,  this.quartBase)}
            {this.props.listItem("Pork with Garlic Sauce",this.pintBase,  this.quartBase, true)}
            {this.props.listItem("Double Sauteed Pork",this.pintBase,  this.quartBase, true)}
            {this.props.listItem("Roast Pork with Mixed Vegetables",this.pintBase,  this.quartBase)}
            {this.props.listItem("Moo Shu Pork(w. 4 Pancakes)",this.pintBase,  this.quartBase)}
            {this.props.listItem("Ginger Pork with String Beans",this.pintBase,  this.quartBase)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Pork
