import { createContext, useContext, useEffect, useReducer } from "react";
import filter_reducer from "../reducer/filter_reducer";
import { useProductContext } from "./product_context";

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort_by: "Price (Lowest)",
  filter: {
    shipping: false,
    category: "all",
    company: "all",
    colors: "all",
    price: "",
  },
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_ALL_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER" });
  }, [state.filter]);

  const changeCompany = (clicked) => {
    dispatch({ type: "CHANGE_COMPANY", payload: clicked });
  };

  const changePrice = (clicked) => {
    dispatch({ type: "CHANGE_PRICE", payload: clicked });
  };

  const filterBy = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "category") {
      value = event.target.textContent;
    }

    if (name === "company") {
      value = event.target.textContent;
    }

    if (name === "colors") {
      value = event.target.dataset.color;
    }

    if (name === "shipping") {
      value = event.target.checked;
    }

    console.log("name", name, "value", value);
    dispatch({ type: "FILTER_BY", payload: { name, value } });
    // dispatch({ type: "FILTER" });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS", payload: products });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        changeCompany,
        changePrice,
        filterBy,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
