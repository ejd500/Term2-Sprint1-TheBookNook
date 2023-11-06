import Button from "./HeaderButton";
import photo1 from "../images/photo1.jpg";
import "../styles/header2.css";
import {Link} from "react-router-dom";

  const Header = () => {
    return (
        <section className="headercontainer">
                <img id="backgroundimage" alt="Header" src={photo1} />
                <div className = "gradient-overlay"></div>
                <div id="titlebox">The Book Nook
                    <nav>
                        <Link to="/"><Button backgroundColor="#354f52" text="Homepage" /></Link>
                        <Link to="/checkout"><Button backgroundColor="#CAD2C5" color="#354f52" text="Checkout" /></Link>
                    </nav>
                </div>
                
        </section>
    );
  };
  
  export default Header;