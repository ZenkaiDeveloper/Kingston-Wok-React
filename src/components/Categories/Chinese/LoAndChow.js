import React from 'react';
import '../../../styles/Categories.css'

class LoAndChow extends React.Component{
  basePint = 6.55;
  baseQuart = 9.15;
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
            {this.props.listNoodle("Beef", (this.basePint+.40).toPrecision(3), (this.baseQuart+.60).toPrecision(3))}
            {this.props.listNoodle("Shrimp", (this.basePint+.40).toPrecision(3), (this.baseQuart+.60).toPrecision(3))}
            {this.props.listNoodle("Mixed", (this.basePint+.40).toPrecision(3), (this.baseQuart+.60).toPrecision(3))}

          </tbody>
        </table>
      </div>
    )
  }
}

export default LoAndChow
