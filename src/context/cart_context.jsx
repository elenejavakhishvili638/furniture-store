import { createContext, useContext, useEffect, useReducer } from "react";
import cart_reducer from "../reducer/cart_reducer";

const CartContext = createContext();

const initialState = {
  cart_list: JSON.parse(localStorage.getItem("cart")) || [],
  total_item: 0,
  total_amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  const increase_amount = (id, amount, stock) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: { id, amount, stock } });
  };

  const decrease_amount = (id, amount, stock) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: { id, amount, stock } });
  };

  const add_to_cart = (product, amount, color) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, amount, color },
    });
  };

  const clear_cart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove_from_cart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart_list));
    if (state.cart_list) {
      dispatch({ type: "CALCULATE_TOTALS" });
    }
  }, [state.cart_list, state.cart_list.amount]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        add_to_cart,
        clear_cart,
        remove_from_cart,
        increase_amount,
        decrease_amount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
