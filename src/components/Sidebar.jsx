import React from "react";
import Logo from "../images/logo.svg";
import { IoMdClose } from "react-icons/io";
import "./sidebar.css";
import { links } from "../utils/products";
import { Link } from "react-router-dom";
import CartBtn from "./CartBtn";
import { useProductContext } from "../context/product_context";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useProductContext();

  // console.log(sidebarOpen);
  return (
    <div className={sidebarOpen ? "sidebar sidebar-show" : "sidebar"}>
      <div className="navbar-container">
        <img alt="logo" src={Logo} className="logo-image" />
        <button className="close-btn" onClick={closeSidebar}>
          <IoMdClose />
        </button>
      </div>
      <ul className="sidebar-navigation-links">
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

export default Sidebar;
