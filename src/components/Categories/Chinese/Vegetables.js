import React from 'react';
import '../../../styles/Categories.css'

class Vegetables extends React.Component{
  pintBase = 6.95;
  quartBase = 9.95;
  render(){
    return(
      <div className=" category-introduction Vegetables" >
        <h2 style={{marginTop:"2rem"}}>Vegetarian Dishes</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint">Pt.(16oz)</th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Qt.(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Buddha's Delight(Mixed Veggies)",this.pintBase,  this.quartBase)}
            {this.props.listItem("Broccoli with Garlic Sauce","N/A",  this.quartBase, true)}
            {this.props.listItem("Sauteed String Beans","N/A",  (this.quartBase+.30).toPrecision(4))}
            {this.props.listItem("Eggplant with Garlic Sauce","N/A",  (this.quartBase+.30).toPrecision(4), true)}
            {this.props.listItem("Bean Curd Szechuan Style","N/A", this.quartBase, true)}
            {this.props.listItem("Moo Shu Vegetable","N/A", this.quartBase)}

          </tbody>
        </table>
      </div>
    )
  }
}

export default Vegetables