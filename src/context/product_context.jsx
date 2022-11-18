import { createContext, useContext, useReducer, useEffect } from "react";
import product_reducer from "../reducer/Product_reducer";
import { products_url } from "../utils/products";

const initialState = {
  sidebarOpen: false,
  loading: true,
  // showCart: false,
  featuredProducts: [],
  products: [],
  single_product: {},
};

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(product_reducer, initialState);

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

  useEffect(() => {
    dispatch({ type: "LOADING_TRUE" });
    fetch(products_url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "PRODUCTS", payload: data }));
    dispatch({ type: "LOADING_FALSE" });
  }, []);

  const fetchSingleProduct = (single_product_url) => {
    fetch(single_product_url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SINGLE_PRODUCT", payload: data }));
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
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
