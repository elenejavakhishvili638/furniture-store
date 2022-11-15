import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = ({ pageOne, pageTwo }) => {
  return (
    <div className="banner">
      <h3 className="page-one">
        <Link to="/">Home</Link>
      </h3>
      <h3 className="page-two">/ {pageOne}</h3>
      <h3 className="page-three">{pageTwo}</h3>
    </div>
  );
};

export default Banner;
