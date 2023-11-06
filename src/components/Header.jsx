import "../styles/header.css";
import photo1 from "../images/photo1.jpg"
import HeaderButton from "./HeaderButton";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <section className="headerbox">
        <img className="background-img" alt="Header" src={photo1}/>
        <div className="overlay"></div>
        <div id="title">The Book Nook
            <nav>
            <Link to="/detailspage"><HeaderButton backgroundColor="#354f52" color="#ffffff" text="Browse Books"/></Link>
            <Link to="/checkout"><HeaderButton backgroundColor="#CAD2C5" color="#354f52" text="Checkout"/></Link>
            </nav>
        
        </div>
        
      
      
    </section>

  );
};

export default Header