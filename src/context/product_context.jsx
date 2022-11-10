import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/Product_reducer";
import { products_url } from "../utils/products";

const initialState = {
  sidebarOpen: false,
  loading: true,
  // showCart: false,
  featuredProducts: [],
};

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
    // dispatch({ type: "SHOW_CART" });
  };

  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  useEffect(() => {
    dispatch({ type: "LOADING_TRUE" });
    fetch(products_url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "LOAD_PRODUCTS", payload: data }));
    dispatch({ type: "LOADING_FALSE" });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider };
