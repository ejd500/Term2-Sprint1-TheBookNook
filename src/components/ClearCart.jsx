import React from 'react'
import "../styles/clearcart.css"

const ClearCart = (props) => {
       
    return (
        <div className="empty-cart">
        <button onClick = {props.handleClearCart}>Empty Cart</button>
        </div>
    );

    };
export default ClearCart;
