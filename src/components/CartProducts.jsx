import React from "react";
import AddToCart from "./AddToCart";
import "./cartProducts.css";
import { IoMdTrash } from "react-icons/io";
import { useCartContext } from "../context/cart_context";

const CartProducts = ({ cart_list }) => {
  const { remove_from_cart, increase_amount, decrease_amount } =
    useCartContext();

  // console.log(cart_list);

  return (
    <div>
      {cart_list &&
        cart_list.map((item) => {
          const { image, amount, price, color, id, name } = item;
          return (
            <div key={id} className="card-products-container">
              <div className="cart-product-info">
                {/* <div className="img"></div> */}
                <img className="img" src={image && image} alt="pic" />
                <div className="cart-product-description">
                  <h3>{name}</h3>
                  <p className="small-color">
                    color:{" "}
                    <button
                      className="cart-color"
                      style={{ backgroundColor: color }}
                    ></button>
                  </p>
                  <p className="small-price">price: ${price / 100}</p>
                </div>
              </div>
              <p className="desktop-price">${price / 100}</p>
              <AddToCart
                amount={amount}
                bin="bin"
                increase={increase_amount}
                decrease={decrease_amount}
                single_product={item}
              />
              <p className="desktop-total">
                ${((price / 100) * amount).toFixed(2)}
              </p>
              <button
                className="bin"
                onClick={() => {
                  // console.log(id);
                  remove_from_cart(id);
                }}
              >
                <IoMdTrash />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default CartProducts;
