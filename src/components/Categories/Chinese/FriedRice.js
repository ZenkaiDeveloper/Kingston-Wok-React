import React from 'react';
import '../../../styles/Categories.css'

class FriedRice extends React.Component{
  basePint = 5.70;
  baseQuart = 7.95;
  render(){
    return(
      <div className=" category-introduction FriedRice" >
        <h2 style={{marginTop:"2rem"}}>Fried Rice</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint">Pt.(16oz)</th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Qt.(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listRice("Chicken", this.basePint.toPrecision(3), this.baseQuart.toPrecision(3))}
            {this.props.listRice("Pork", this.basePint.toPrecision(3), this.baseQuart.toPrecision(3))}
            {this.props.listRice("Vegetable", this.basePint.toPrecision(3), this.baseQuart.toPrecision(3))}
            {this.props.listRice("Beef", (this.basePint+.30).toPrecision(3), (this.baseQuart+.30).toPrecision(3))}
            {this.props.listRice("Shrimp", (this.basePint+.75).toPrecision(3), (this.baseQuart+.50).toPrecision(3))}
            {this.props.listRice("Mixed", (this.basePint+.75).toPrecision(3), (this.baseQuart+.80).toPrecision(3))}

          </tbody>
        </table>
      </div>
    )
  }
}

export default FriedRice
