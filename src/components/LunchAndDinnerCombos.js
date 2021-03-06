import React from 'react';
import Header from './Header'
import '../styles/ChineseMenu.css'

const combos = () => {
  const listFoodItem = (id, name, ptPrice, qtPrice = " ", spice = false) => {
    if (spice) {
      return(
        <tr className="item-row">
          <td className="id spicy" >{id}.</td>
          <td className="item-name spicy"><i className="fas spicy fa-fire"></i> {name}</td>
          <td className="size spicy">{ptPrice}</td>
          <td className="size spicy">{qtPrice}</td>
        </tr>
      )
    }
    return(
      <tr className="item-row">
        <td className="id">{id}.</td>
        <td className="item-name">{name}</td>
        <td className="size">{ptPrice}</td>
        <td className="size">{qtPrice}</td>
      </tr>
    )
  };

  const priceToPre = (price) => {
    let precision = price.toString().replace('.','').length;
    return price.toPrecision(precision);
  };

  return(
    <div className="combos">
      <Header/>
      <div className="header-spacer"></div>
      <h1>Chinese Lunch Special & Dinner Combos</h1>
      <div className="Lunch-Special">
        <h3>LUNCH SPECIAL:</h3>
        <p>From 11:00AM to 4:00PM</p>
        <p>Served with your choice of Roast Pork Fried Rice, White Rice, or Brown Rice.</p>
        <p>Add a soup(Wonton, Egg Drop, or Hot&Sour) or Egg Roll for extra $1.35.</p>
      </div>
      <div className="Dinner Combos">
        <h3>DINNER COMBO:</h3>
        <p>Served with Rice(Roast Pork Fried, White, or Brown) Soup(Wonton, Egg Drop, or Hot&Sour) AND an Egg Roll.</p>
      </div>
      <div className="chinese-combos">
      <table>
        <thead>
          <tr>
            <th> </th>
            <th className="item-area"></th>
            <th className="table-headers table-pint">Lunch Special</th>
            <th className="table-headers table-quart">Dinner Combo</th>
          </tr>
        </thead>
        <tbody>
          {listFoodItem(1,"Lo Mein(Chicken or Pork)", priceToPre(7.75), priceToPre(10.55))}
          {listFoodItem(2,"Chow Mein(Chicken or Pork)", priceToPre(7.75), priceToPre(10.55))}
          {listFoodItem(3,"Chicken With Broccoli", priceToPre(7.75), priceToPre(10.55))}
          {listFoodItem(4,"Moo Goo Gai Pan", priceToPre(7.75), priceToPre(10.55))}
          {listFoodItem(5,"Chicken with Hot Pepper Peanut Sauce", priceToPre(7.75), priceToPre(10.55), true)}
          {listFoodItem(6,"Sweet And Sour Chicken", priceToPre(7.75), priceToPre(10.55))}
          {listFoodItem(7,"Roast Pork With Mixed Vegetables", priceToPre(7.75), priceToPre(10.55))}
          {listFoodItem(8,"Double Sauteed Pork", priceToPre(7.75), priceToPre(10.55), true)}
          {listFoodItem(9,"Beef with Broccoli", priceToPre(7.95), priceToPre(10.95))}
          {listFoodItem(10,"Pepper Steak", priceToPre(7.95), priceToPre(10.95))}
          {listFoodItem(11,"Beef with Szechuan Style", priceToPre(7.95), priceToPre(10.95), true)}
          {listFoodItem(12,"Hunan Beef", priceToPre(7.95), priceToPre(10.95), true)}
          {listFoodItem(13,"Beef with Garlic Sauce", priceToPre(7.95), priceToPre(10.95), true)}
          {listFoodItem(14,"Chicken and Shrimp Combo", priceToPre(7.95), priceToPre(10.95))}
          {listFoodItem(15,"Shrimp With Lobster Sauce", priceToPre(7.95), priceToPre(10.95))}
          {listFoodItem(16,"Shrimp With Broccoli", priceToPre(7.95), priceToPre(10.95))}
          {listFoodItem(17,"Boneless Spare Ribs", priceToPre(7.95), priceToPre(10.95))}
          {listFoodItem(18,"General Tso's Chicken", priceToPre(7.95), priceToPre(10.95), true)}
          {listFoodItem(19,"Sesame Chicken", priceToPre(7.95), priceToPre(10.95))}

        </tbody>
      </table>

      </div>
      <div className="japanese-combos">
        <h1>Japanese Lunch Specials</h1>
        <p>Served with Miso Soup</p>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th className="item-area"></th>
              <th className="table-headers table-pint"></th>
              <th className="table-headers table-quart">Price</th>
            </tr>
          </thead>
          <tbody>
            {listFoodItem(1,"Sushi Lunch"," ", 10.60.toPrecision(4))}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>1 California Roll & 4 pieces of Nigiri Sushi</small></td>
            </tr>

            {listFoodItem(2,"Sashimi Lunch"," ", 11.60.toPrecision(4))}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>8 pieces of Premium Cuts of Raw Fish.</small></td>
            </tr>

            {listFoodItem(3,"Sushi and Sashimi Combo"," ", 16.05)}
            <tr>
              <td id="rev-diet" className="chef-description" colSpan="3"><small>1 California Roll, 6 pieces of Sashimi and 4 peices of nigiri sushi.</small></td>
            </tr>

            {listFoodItem(4,"Two California Rolls"," ", 9.60.toPrecision(3))}
            {listFoodItem(5,"Tuna Roll and Spicy Tuna Roll"," ", 10.60.toPrecision(4))}
            {listFoodItem(6,"Spicy Salmon and Philadelphia Roll"," ", 10.60.toPrecision(4))}
            {listFoodItem(7,"Shitake Mushroom & Sweet Potato Tempura Roll"," ", 9.35)}


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default combos
