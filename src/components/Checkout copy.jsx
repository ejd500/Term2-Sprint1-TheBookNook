import secure from "../images/security.png";
import Footer from "../components/Footer";
import "../styles/header.css";
import "../styles/checkout.css";
import React, {useState} from "react";
import Header3 from "../components/Header3";
 
 
function Checkout(props) {  
    const [purchasedBook, setPurchasedBook] = useState({ title: '', price: '' });
 
    const handlePurchase = (title, price) => {
        console.log("hello")
        setPurchasedBook({ title, price });
    };
 
    return (
        <div>
            <Header3/>
            <div className="checkoutsection">               
                <form className="form">
                    <div className="checkout">
                        <h1>Checkout</h1>
                    </div>
 
                    <div className="purchased-book-info">                            <br/> 
                    
                    <div className = "purchase-details">                                      
                    <p className="titlebox">Title: {props.orderSummary.title}</p>                       
                    <p className="pricebox">Price: ${props.orderSummary.price}</p>
                    </div>                                                 
                    </div>
 
                    <div className="email">
                        <label htmlFor="email">Email:&nbsp;</label>
                        <input type="text" className="email" name="email" placeholder=" Enter your email here" />
                    </div>
 
                    <div className="creditcard">
                        <label htmlFor="creditcard">Credit&nbsp;Card:&nbsp;</label>
                        <input type="text" name="creditcard" className="creditcard" placeholder=" XXXX-XXXX-XXXX-XXXX"/>
                    </div>
 
                    <div className="cvc">
                        <label htmlFor="exp">Exp&nbsp;Date:&nbsp;</label>
                        <input type="text" name="exp" className="exp" placeholder=" MM/YY"/>
                        <label htmlFor="cvc">&nbsp;CVC:&nbsp;</label>
                        <input type="text" name="cvc" className="cvc" placeholder=" CVC"/>
                    </div>
 
                    <button className="paybutton"
                    onClick={() => {console.log("Button clicked");handlePurchase(props.orderSummary.title, props.orderSummary.price)}}>
                    Purchase
                    </button>
 
                    <div className="secure">
                        <img src={secure} alt="secure" className="security"/>Payments are secure & encripted
                    </div>
                </form>  
            </div>                 
            <Footer/>
        </div>    
    );
};   
        
export default Checkout;


// import "../styles/checkout.css"
// import Footer from "./Footer"
// import secure from "../images/secure.png"
// import Header2 from "./Header2"

// const Checkout = () => {
//   return (
//     <>
//         <Header2/>

//         <div className="checkoutsection">

//             <form className="form">

//                 <div className="checkout">
//                     <h1>Checkout</h1>
//                 </div>

//                 <div className="placeholder">
//                     {/* DOM Code injects here */}
//                 </div>

//                 <div className="email">
//                     <label htmlFor="email">Email:&nbsp;</label>
//                     <input type="text" className="email" name="email" placeholder=" Enter your email here" />
//                 </div>

//                 <div className="creditcard">
//                     <label htmlFor="creditcard">Credit&nbsp;Card:&nbsp;</label>
//                     <input type="text" name="creditcard" className="creditcard" placeholder=" XXXX-XXXX-XXXX-XXXX"/>
//                 </div>

//                 <div className="cvc">
//                     <label htmlFor="exp">Exp&nbsp;Date:&nbsp;</label>
//                     <input type="text" name="exp" className="exp" placeholder=" MM/YY"/>
//                     <label htmlFor="cvc">&nbsp;CVC:&nbsp;</label>
//                     <input type="text" name="cvc" className="cvc" placeholder=" CVC"/>
//                 </div>

//                 <button className="paybutton">
//                     Pay
//                 </button>

//                 <div className="secure">
//                     <img src={secure} alt="secure" className="security"/>Payments are secure & encripted
//                 </div>
//             </form>
        
//         </div>

//         <Footer/>

//     </>

//   )
// }

// export default Checkout