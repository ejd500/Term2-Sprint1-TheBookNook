import facebook from "../images/facebook.png"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.png"
import "../styles/footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className="left">
            <p>
                (709) 444-4444 <br/>
                thebooknook@gmail.com<br/>
                <br/>
                100 Water Street<br/>
                St. John's, NL<br/>
                A0A 0G9 <br/>
                
            </p>
        </div>

        <div className="right">
            <p className="right-aligned">Connect with us on social media!</p>
            
            <div className="socials">
                <Link to="https://www.facebook.com" target="_blank"><img src={facebook} alt="facebook" className="socialmedia"/></Link>
                <Link to="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram" className="socialmedia"/></Link>
                <Link to="https://www.twitter.com" target="_blank"><img src={twitter} alt="twitter" className="socialmedia"/></Link>
            </div>
            
            <p className="right-aligned">&copy; The Book Nook 2023</p>
        </div>
      
      </section>
    </>
  )
}

export default Footer
