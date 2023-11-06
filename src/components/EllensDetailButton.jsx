import "../styles/ellensbookcard.css"

const EllensDetailButton = ({backgroundColor, color, text, click}) => {
    return (
      <button onClick={click}
      style={{backgroundColor: backgroundColor, color: color}} 
      className="detailsbutton"> 
      {text}
      </button>
    )
  }
  
  export default EllensDetailButton