import React from "react";
import "./newletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-wrap">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="newsletter-sub">
          <div className="newsletter-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint unde quaerat ratione soluta veniam provident adipisci cumque
              eveniet tempore?
            </p>
          </div>
          <form className="sub">
            <input type="text" placeholder="Enter Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
