import "../styles/corinasbookcard.css"
 
const CorinasButton = ({backgroundColor, color, text, click})=>{
   
    return(        
        <button className="btn" onClick = {click} style = {{backgroundColor:backgroundColor, color: color}}>{text}</button>    
    );
};
 
export default CorinasButton;