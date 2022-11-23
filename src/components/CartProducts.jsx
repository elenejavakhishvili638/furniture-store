import React from "react";
import AddToCart from "./AddToCart";
import "./cartProducts.css";
import { IoMdTrash } from "react-icons/io";

const CartProducts = () => {
  return (
    <div className="card-products-container">
      <div className="cart-product-info">
        <div className="img">pp</div>
        <div className="cart-product-description">
          <h3>name</h3>
          <p>
            color: <span>c</span>
          </p>
          <p>price:</p>
        </div>
      </div>
      <p className="desktop-price">price</p>
      <AddToCart bin="bin" />
      <p className="desktop-total">subtotal</p>
      <button className="bin">
        <IoMdTrash />
      </button>
    </div>
  );
};

export default CartProducts;
