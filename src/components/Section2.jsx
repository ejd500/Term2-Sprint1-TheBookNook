import "../styles/section2.css";
import photo3 from "../images/photo3.jpg"
import EllensBookCard from "./EllensBookCard"
import book1 from "../images/ellens-book.png";
import book2 from "../images/the_woods.png";
import photo2 from "../images/photo2.jpg"
import React, {useState} from "react";
import {Link} from "react-router-dom";

const Section2 = ({onPurchase}) => {


return (
    <section className="section2">

        <div className="productbox">
            <div className="title">
                <Link to="/detailspage" className="my-link"><h2 className="title">Products</h2></Link>
                <p className="margin-bottom">Many titles to explore</p>
            </div>
            <img className="photo3" alt="photo2" src={photo2} />
        </div>

        <div className="featuredbox">
            <div className="title">
            <Link to="/detailspage" className="my-link"><h2 className="title">Featured</h2></Link>
        </div>
            
            <EllensBookCard name={"Ellen"} image={book1} title="The Devil is in You Crossways " author="Patrick James Hann" price="24.99" description="A memoir of boyhood in the rural community of Merasheen Island, Placentia Bay, in the 1950's and 60's."onPurchase={onPurchase}/>
            <EllensBookCard name={"Corina"} image={book2} title="The Woods" author="Sebastian Bennett " price="32.99" description="The Woods is a gripping thriller that explores the dark secrets hidden deep within a remote forest. As a group of friends ventures into this ominous wilderness, they must confront their own fears and the chilling mysteries that lurk among the trees, leading to an unforgettable journey of suspense and survival." onPurchase={onPurchase}/>
        </div>

        <div className="checkoutbox">
            <div className="title">
                <Link to="/checkout" className="my-link"><h2 className="title">Checkout</h2></Link>
                <p className="margin-bottom">Smooth and secure shopping</p>
            </div>
        
            <img className="photo3" alt="photo3" src={photo3} />
        </div>

    </section>

  );
};

export default Section2