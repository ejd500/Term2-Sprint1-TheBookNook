import CorinasButton from './CorinasButton';
import React, {useState} from "react";

 
const CorinasBookCard = ({ image, title, author, price, description, onPurchase}) => {
  
  const [showDetails, setShowDetails] = useState(false);
    const clickMe = (event)=>{
    console.log("I've been clicked");   
    setShowDetails(!showDetails);      
    };
    
  return (
    <div className = "products">
      <div className="corinasbookcard">     
        <img src={image} alt={title} className="img" />    
        <h3>{title}</h3>
        <p> <span className = "bold">By:</span> {author}</p>
        <p> <span className = "bold">Price:</span> ${price}</p>
        <div className = "buttoncontainer">     
        <CorinasButton backgroundColor="#354f52" text="Details" click = {clickMe} />
        <CorinasButton backgroundColor="#A52A2A" text="Purchase" click={()=>onPurchase(title, price)}/>
        </div>
        <div className="expand" style={{ display: showDetails ? "block" : "none" }}>  
        <p> {description}</p>
        </div>   
      </div>
    </div>
  );
};
 
export default CorinasBookCard;