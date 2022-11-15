import { createContext, useContext, useReducer } from "react";
import filter_reducer from "../reducer/filter_reducer";

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

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  const changeCompany = (clicked) => {
    dispatch({ type: "CHANGE_COMPANY", payload: clicked });
  };

  const changePrice = (clicked) => {
    dispatch({ type: "CHANGE_PRICE", payload: clicked });
  };

  return (
    <FilterContext.Provider value={{ ...state, changeCompany, changePrice }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProvider };
