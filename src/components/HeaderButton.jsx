const Button = ({backgroundColor, color, text, func}) => {
    return (
      <button onClick={func}
      style={{backgroundColor: backgroundColor, color: color}} 
      className="button"> 
      {text}
      </button>
    )
  }
  
  export default Button