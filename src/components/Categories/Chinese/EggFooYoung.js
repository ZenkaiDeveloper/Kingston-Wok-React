import React from 'react';
import '../../../styles/Categories.css'

class EggFooYoung extends React.Component{
  base = 10.75;
  render(){
    return(
      <div className=" category-introduction EggFooYoung" >
        <h2 style={{marginTop:"2rem"}}>Egg Foo Young</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Large</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Chicken"," ",  this.base.toPrecision(4))}
            {this.props.listItem("Roast Pork"," ",  this.base.toPrecision(4))}
            {this.props.listItem("Vegetable"," ",  (this.base-.20).toPrecision(4))}
            {this.props.listItem("Shrimp"," ", (this.base+1).toPrecision(4))}
            {this.props.listItem("Mixed"," ", (this.base+1).toPrecision(4))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default EggFooYoung
