import React from 'react';
import '../../../styles/Categories.css'

class LoAndChow extends React.Component{
  basePint = 5.95;
  baseQuart = 8.75;
  render(){
    return(
      <div className=" category-introduction LoAndChow" >
        <h2 style={{marginTop:"2rem"}}>Lo Mein or Chow Mein</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint">Pt.(16oz)</th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Qt.(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listNoodle("Chicken", this.basePint.toPrecision(3), this.baseQuart.toPrecision(3))}
            {this.props.listNoodle("Pork", this.basePint.toPrecision(3), this.baseQuart.toPrecision(3))}
            {this.props.listNoodle("Vegetable", this.basePint.toPrecision(3), this.baseQuart.toPrecision(3))}
            {this.props.listNoodle("Beef", (this.basePint+.25).toPrecision(3), (this.baseQuart+.25).toPrecision(3))}
            {this.props.listNoodle("Shrimp", (this.basePint+.45).toPrecision(3), (this.baseQuart+.50).toPrecision(3))}
            {this.props.listNoodle("Mixed", (this.basePint+.75).toPrecision(3), (this.baseQuart+.7).toPrecision(3))}

          </tbody>
        </table>
      </div>
    )
  }
}

export default LoAndChow
