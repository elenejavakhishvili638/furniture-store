import React from "react";
import Banner from "../components/Banner";
import CartProducts from "../components/CartProducts";
import "./cart.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { cart_list, clear_cart, total_amount } = useCartContext();
  // console.log(useCartContext());
  return (
    <div>
      {cart_list && cart_list.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="cart-container">
          <Banner pageTwo="/cart" />
          <div className="cart-wrap">
            <div className="desktop-cart-names">
              <p style={{ marginLeft: "5rem" }}>item</p>
              <p style={{ marginLeft: "7rem" }}>price</p>
              <p style={{ marginLeft: "3rem" }}>Qunatity</p>
              <p style={{ marginLeft: "1rem" }}>subtotal</p>
            </div>
            <hr className="desktop-hr" />
            <div className="cart-products">
              <CartProducts cart_list={cart_list} />
            </div>
            <hr />
            <div className="cart-buttons">
              <Link to="/products" className="countinue-shopping">
                countinue shopping
              </Link>
              <button
                className="clear-shopping-cart"
                onClick={() => {
                  clear_cart();
                }}
              >
                clear shopping cart
              </button>
            </div>
            <div className="cart-product-prices">
              <div>
                <div className="wrap">
                  <h3>
                    subtotal: <span>{total_amount.toFixed(2)}</span>
                  </h3>
                  <p>
                    shipping fee: <span>$5.34</span>
                  </p>
                  <hr />
                  <div className="cart-total">
                    <h4>
                      order total:{" "}
                      <span>${(total_amount + 5.34).toFixed(2)}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
