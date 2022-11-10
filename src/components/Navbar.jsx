import React from "react";
import Logo from "../images/logo.svg";
import { GoThreeBars } from "react-icons/go";
import "./navbar.css";
import { links } from "../utils/products";
import { Link } from "react-router-dom";
import CartBtn from "./CartBtn";
import { useProductContext } from "../context/product_context";

const Navbar = () => {
  const { openSidebar } = useProductContext();
  // console.log(openSidebar);
  return (
    <div className="navbar">
      <Link to="/">
        <img alt="logo" src={Logo} className="logo-image" />
      </Link>
      <button className="bar-btn" onClick={openSidebar}>
        <GoThreeBars />
      </button>
      <ul className="navigation-links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <Link className="links" to={url}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <CartBtn />
    </div>
  );
};

export default Navbar;
