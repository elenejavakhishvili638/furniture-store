const filter_reducer = (state, action) => {
  if (action.type === "CHANGE_COMPANY") {
    // console.log(state, action.payload);
    return { ...state, filter: { ...state.filter, company: action.payload } };
  }

  if (action.type === "CHANGE_PRICE") {
    return { ...state, sort_by: action.payload };
  }

  if (action.type === "LOAD_ALL_PRODUCTS") {
    // console.log(state);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }

  if (action.type === "FILTER_BY") {
    const { name, value } = action.payload;
    // console.log(name);

    return { ...state, filter: { ...state.filter, [name]: value } };
  }

  if (action.type === "FILTER") {
    const { all_products } = state;
    const { category, colors, price, company, shipping } = state.filter;

    let products = [...all_products];

    // console.log(state);
    if (category !== "all") {
      products = products.filter((product) => product.category === category);
    }

    if (company !== "all") {
      // console.log("GGG");
      products = products.filter((product) => product.company === company);
    }

    if (colors !== "all") {
      products = products.filter((product) => {
        // console.log("hhh", product.colors);
        return product.colors.find((item) => item === colors);
      });
    }

    if (shipping) {
      console.log("jjj");
      products = products.filter((product) => product.shipping === true);
    }
    return { ...state, filtered_products: products };
  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      // filtered_products: action.payload,
      filter: {
        ...state.filter,
        shipping: false,
        category: "all",
        company: "all",
        colors: "all",
        price: "",
      },
    };
  }
};

export default filter_reducer;
