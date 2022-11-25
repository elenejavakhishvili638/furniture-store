import React from "react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import "./cartBtn.css";
import { useProductContext } from "../context/product_context";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CartBtn = ({ closeSidebar }) => {
  const { sidebarOpen } = useProductContext();
  const { total_item } = useCartContext();

  return (
    <div
      className={
        sidebarOpen ? "btn-container btn-container-open" : "btn-container"
      }
    >
      {/* <div className="cart-btn"></div> */}
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <p>cart</p>
        <button>
          <FaShoppingCart />
          <span className="item-number">{total_item}</span>
        </button>
      </Link>

      <div className="login-btn">
        <p>login</p>
        <button>
          <FaUserPlus />
        </button>
      </div>
    </div>
  );
};

export default CartBtn;
