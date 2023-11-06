import React from 'react'
import "../styles/shoppingcart.css";
import { Link } from 'react-router-dom';


const ShoppingCart = (props) => {
  const shoppingCartImage = require("../images/shopping_cart.png");  


  return (
    <div className="shopping-cart">
      <Link to="/checkout"> 
        <button className="shopping-cart-button" onClick={()=>{props.handleButtonClick()}}>
          <img src={shoppingCartImage} alt="Shopping Cart" />
          {props.orderSummary}
        </button>
      </Link>
    </div>
  );
};

export default ShoppingCart;