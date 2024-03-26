import Home from "./components/Home";
import Checkout from "./components/Checkout";
import DetailsPage from "./components/DetailsPage";
import React, {useState} from "react";
import ShoppingCart from "./components/ShoppingCart";
import ClearCart from "./components/ClearCart";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import"../src/App.css";


/*
  1.)Create a shopping cart component.
  2.)Pass the order summary length into it as a prop so that we can get the count of items in the cart.
  3.)Put an image inside of our cart component.
  4.)Put the text in the component (which is from the props).
  5.)Add shoppingcart.css
  6.)Use position:fixed to keep it up in the top right (top:0px, right:0px).*/
  

function App() {

  const [orderSummary, setOrderSummary] = useState([]);
 
  const onPurchase = (title, price) => {
    console.log("You just purchased this!");
    setOrderSummary([...orderSummary, { title: title, price: price }]);
  }; 
  
  const handleButtonClick = () => {
    console.log("counter working");
  };

  
  const handleClearCart = () => {
    console.log("Cart Cleared")
    setOrderSummary([]);
  };


  return (
    <Router basename="/the-book-nook">
      <ShoppingCart handleButtonClick = {handleButtonClick} orderSummary={orderSummary.length}/>
      <ClearCart handleClearCart = {handleClearCart}/>
      
      <Routes>
        <Route path="/" element={<Home onPurchase={onPurchase}/>}/>
        <Route path="/DetailsPage" element={<DetailsPage onPurchase={onPurchase}/>}/>
        <Route path="/Checkout" element={<Checkout orderSummary = {orderSummary}/>}/>
        <Route path="/" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>     
    </Router> 
  
  );
};

export default App;
