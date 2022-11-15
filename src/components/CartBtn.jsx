import React from "react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import "./cartBtn.css";
import { useProductContext } from "../context/product_context";

const CartBtn = () => {
  const { sidebarOpen } = useProductContext();

  // console.log(sidebarOpen);

  return (
    <div
      className={
        sidebarOpen ? "btn-container btn-container-open" : "btn-container"
      }
    >
      <div className="cart-btn">
        <p>cart</p>
        <button>
          <FaShoppingCart />
          <span className="item-number">0</span>
        </button>
      </div>
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
