import React from 'react';
import '../../../styles/Categories.css'

class ChowAndMeiFun extends React.Component{
  base = 9.95;
  render(){
    return(
      <div className="category-introduction ChowAndMeiFun" >
        <h2 style={{marginTop:"2rem"}}>Chow Fun or Mei Fun</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th className="table-headers table-pint"> </th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Qt.(32oz)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listNoodle("Chicken"," ",  this.base.toPrecision(3))}
            {this.props.listNoodle("Roast Pork"," ",  this.base.toPrecision(3))}
            {this.props.listNoodle("Beef"," ", (this.base+.30).toPrecision(4))}
            {this.props.listNoodle("Shrimp"," ", (this.base+1).toPrecision(4))}
            {this.props.listNoodle("Mixed"," ", (this.base+1).toPrecision(4))}

          </tbody>
        </table>
      </div>
    )
  }
}

export default ChowAndMeiFun
