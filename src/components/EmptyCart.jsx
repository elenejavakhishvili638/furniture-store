import React from "react";
import "./empyCart.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h2>your cart is empty</h2>
      <Link to="/products" className="fill-it">
        fill it
      </Link>
    </div>
  );
};

export default EmptyCart;
