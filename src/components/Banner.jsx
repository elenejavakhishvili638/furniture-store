import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = ({ pageOne, pageTwo, pageThree }) => {
  // console.log(pageTwo);
  return (
    <div className="banner">
      <h3 className="page-one">
        <Link to="/" className="page-one-text">
          Home
        </Link>
      </h3>
      <h3 className="page-one">
        <Link
          to={pageTwo}
          className={pageThree ? "page-one-text" : "page-one-active-text"}
        >
          {pageTwo}
        </Link>
      </h3>
      <h3 className="page-one">
        <Link to={pageThree} className={pageThree && "page-one-active-text"}>
          {pageThree}
        </Link>
      </h3>
    </div>
  );
};

export default Banner;
