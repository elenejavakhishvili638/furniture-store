import React, { useState } from "react";
import "./addToCart.css";

const AddToCart = ({ single_product, bin }) => {
  return (
    <div className="add-to-cart-container">
      <div className={bin ? "choose-amount-cart" : "choose-amount"}>
        <button>-</button>
        <h2>1</h2>
        <button>+</button>
      </div>
      <div className="add-to-cart">
        {!bin && <button className="add-to-cart-btn">add to cart</button>}
      </div>
    </div>
  );
};

export default AddToCart;
