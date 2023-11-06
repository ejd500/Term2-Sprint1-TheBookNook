import EllensDetailButton from './EllensDetailButton';
import "../styles/ellensbookcard.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const EllensBookCard = ({name, image, title, author, price, description, onPurchase}) => {
    const [showDetails, setShowDetails] = useState(false);
    const clickMe = (event)=>{
        console.log("I've been clicked");   
        setShowDetails(!showDetails);      
    };
    
    return (
    <>
        <div className = "bookcard">
            <div>
                <img src = {image} alt = {title} className = "image"/>
            </div>
            
            <div className = "innerdetailsbox">
                <h3 className='title2'>{name}'s Pick</h3>

                <h4 className='title2'>{title}</h4>
                <p><span className="bold">By:</span> {author}</p>
                <p><span className = "bold">Price:</span> ${price}</p>
                
                <div className='buttons'>
                <br/>
                <EllensDetailButton backgroundColor = "#354f52" color="white" text = "Details" click = {clickMe}/>
                <EllensDetailButton backgroundColor = "#A52A2A" color="white" text = "Purchase" click={()=>onPurchase(title, price)}/>
                </div>
                <div style={{ display: showDetails ? "block" : "none" }}>
                    <p>{description}</p>
                </div>
            </div>  
        </div>
    </>
  )
}

export default EllensBookCard