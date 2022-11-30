import React, { useState } from "react";
import "./addToCart.css";
import { useCartContext } from "../context/cart_context";
import ChooseColor from "./ChooseColor";

const AddToCart = ({
  single_product,
  bin,
  increase,
  decrease,
  amount,
  color,
  setColor,
}) => {
  const { add_to_cart } = useCartContext();
  const [select, setSelect] = useState(false);
  const { stock, id } = single_product;

  // console.log(stock);
  return (
    <div className="add-to-cart-container">
      {!bin && (
        <ChooseColor single_product={single_product} setColor={setColor} />
      )}
      <div className={bin ? "choose-amount-cart" : "choose-amount"}>
        <button
          name="decrease"
          onClick={() => {
            decrease(id, amount, stock);
          }}
        >
          -
        </button>
        <h2>{amount}</h2>
        <button
          name="increase"
          onClick={() => {
            if (single_product.stock !== 0) {
              increase(id, amount, stock);
            } else {
              setSelect(true);
            }
          }}
        >
          +
        </button>
      </div>
      <div className="add-to-cart">
        {!bin && (
          <button
            className="add-to-cart-btn"
            onClick={() => {
              if (single_product.stock !== 0) {
                add_to_cart(single_product, amount, color);
              } else {
                setSelect(true);
              }
            }}
          >
            add to cart
          </button>
        )}
        {select && (
          <p style={{ color: "red", fontWeight: "bold" }}>Not in stock</p>
        )}
      </div>
    </div>
  );
};

export default AddToCart;

// single_product.id,
// single_product.images[0].url,
// color,
// single_product.price,
// amount,
// single_product.name,
// single_product.stock
