import React from 'react';
import '../../../styles/Categories.css'

class Nigiri extends React.Component{

  render(){
    return(
      <div className=" category-introduction japanese-makis" >
        <h2>Nigiri Sushi (Sashimi Option) (Two pieces in an Order)</h2>
        <table>
          <thead>
            <tr>
              <th className="item-area">Cooked</th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Ebi(Shrimp)"," ", 4.75.toPrecision(3))}
            {this.props.listItem("Hokigai(Red Clam)"," ", 4.50.toPrecision(3))}
            {this.props.listItem("Inari(Sweet Bean Curd)"," ", 3.75.toPrecision(3))}
            {this.props.listItem("Kani(Crab)"," ", 4.50.toPrecision(3))}
            {this.props.listItem("Smoked Salmon"," ", 4.75.toPrecision(3))}
            {this.props.listItem("Tako(Octopus)"," ", 5.00.toPrecision(3))}
            {this.props.listItem("Tomago(Omelet)"," ", 4.00.toPrecision(3))}
            {this.props.listItem("Unagi(Smoked Eel)"," ", 5.20.toPrecision(3))}

          </tbody>
        </table>


        <table style={{marginTop:"3rem"}}>
          <thead>
            <tr>
              <th className="item-area">Raw</th>
              <th className="table-headers table-pint"> </th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listItem("Amaebi(Sweet Shrimp)"," ", 4.25.toPrecision(3))}
            {this.props.listItem("Hamachi(Yellow Tail)"," ", 5.25)}
            {this.props.listItem("Ikura(Salmon Egg)"," ", 5.25.toPrecision(3))}
            {this.props.listItem("Maguro(Tuna)"," ", 5.25)}
            {this.props.listItem("Sake(Salmon)"," ", 5.25)}
            {this.props.listItem("Saba(Mackerel)"," ", 4.55)}
            {this.props.listItem("Tai(Red Snapper)"," ", 4.55)}
            {this.props.listItem("Tobiko(Flying Fish Egg)"," ", 4.55)}

          </tbody>
        </table>

      </div>
    )
  }
}

export default Nigiri
