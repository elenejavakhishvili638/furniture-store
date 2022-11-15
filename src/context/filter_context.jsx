import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/Product_reducer";
import { products_url } from "../utils/products";

const initialState = {
  shipping: false,
  grid_view: true,
  sort_by: "Price (Lowest)",
  filter: {
    category: "all",
    company: "all",
    colors: "all",
    price: "",
  },
};
