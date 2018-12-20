import React from 'react';
import '../../../styles/Categories.css'

class LoAndChow extends React.Component{
  basePint = 5.50;
  baseQuart = 8.25;
  render(){
    return(
      <div className="LoAndChow" >
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
            {this.props.listNoodle("Chicken", this.basePint, this.baseQuart)}
            {this.props.listNoodle("Pork", this.basePint, this.baseQuart)}
            {this.props.listNoodle("Vegetable", this.basePint, this.baseQuart)}
            {this.props.listNoodle("Beef", this.basePint+.25, this.baseQuart+.25)}
            {this.props.listNoodle("Shrimp", this.basePint+.45, this.baseQuart+.50)}
            {this.props.listNoodle("Mixed", this.basePint+.75, this.baseQuart+.7)}

          </tbody>
        </table>
      </div>
    )
  }
}

export default LoAndChow
