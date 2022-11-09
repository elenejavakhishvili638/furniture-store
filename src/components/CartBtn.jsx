import React from "react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import "./cartBtn.css";

const CartBtn = () => {
  return (
    <div className="btn-container">
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
