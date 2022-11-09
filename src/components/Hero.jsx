import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import image1 from "../images/hero-bcg.jpeg";
import image2 from "../images/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-side">
        <h1 className="hero-title">
          Design Your <br /> Comfort Zone
        </h1>
        <p className="hero-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button className="shop-now">
          <Link to="" className="shop">
            shop now
          </Link>
        </button>
      </div>
      <div className="right-side">
        <img className="image-one" alt="pic" src={image1} />
        <img className="image-two" alt="pic" src={image2} />
      </div>
    </div>
  );
};

export default Hero;
