import React from 'react';
import '../../../styles/Categories.css'

class Appetizers extends React.Component{
  render(){
    return(
      <div className=" category-introduction Appetizers" >
        <h2 style={{marginTop:"2rem"}}>Appetizers</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area"></th>
              <th style={{textAlign:"center"}} className="table-headers table-quart">Price</th>
              <th className="table-headers table-pint"></th>

            </tr>
          </thead>
          <tbody>
            {this.props.listApp("Bar-B-Q Spare Ribs", "half: 8.75", "full: 13.95")}
            {this.props.listApp("Boneless Ribs", "Sm: 7.55", "Lg: 11.55")}
            {this.props.listApp("Egg Roll (1)", "1.95")}
            {this.props.listApp("Spring Roll (1)", "1.75")}
            {this.props.listApp("Pork or Vegtable Dumplings(6)(Steamed or Pan Fried)", "6.95")}
            {this.props.listApp("Steamed Chicken Dumplings in Hot Chili Sauce(6)", "6.95")}
            {this.props.listApp("Fried Wontons(15)", "5.95")}
            {this.props.listApp("Chicken Wings(8)", "7.15")}
            {this.props.listApp("Cold Noodle with Sesame Sauce", "5.15")}
            {this.props.listApp("Crab Meat Rangoons(4)", "4.50")}

          </tbody>
        </table>
      </div>
    )
  }
}

export default Appetizers
