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

  if (action.type === "SORT_BY") {
    return {
      ...state,
      // filtered_products: tempProducts,
      sort_by: action.payload,
    };
  }

  if (action.type === "FILTER_BY") {
    const { name, value } = action.payload;
    return { ...state, filter: { ...state.filter, [name]: value } };
  }

  if (action.type === "FILTER") {
    const { all_products } = state;
    const { category, colors, price, company, shipping, text } = state.filter;

    // console.log(state);

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
      // console.log("jjj");
      products = products.filter((product) => product.shipping === true);
    }

    if (text !== "") {
      products = products.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }

    if (price !== 309999) {
      products = products.filter((product) => product.price <= price);
    }

    return { ...state, filtered_products: products };
  }

  if (action.type === "SORT") {
    const { sort_by, filtered_products } = state;

    let tempProducts = [];

    if (sort_by === "Price (Lowest)") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (sort_by === "Price (Highest)") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (sort_by === "Name (A - Z)") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (sort_by === "Name (Z - A)") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }

  if (action.type === "CHANGE_GRID_VIEW") {
    return {
      ...state,
      grid_view: true,
    };
  }

  if (action.type === "CHANGE_LIST_VIEW") {
    return {
      ...state,
      grid_view: false,
    };
  }

  if (action.type === "CLEAR_FILTERS") {
    console.log(state);

    return {
      ...state,
      sort_by: "Price (Lowest)",
      filter: {
        ...state.filter,
        shipping: false,
        category: "all",
        company: "all",
        colors: "all",
        price: 309999,
        text: "",
      },
    };
  }
};

export default filter_reducer;

// const { all_products } = state;
// const { category, colors, price, company, shipping, text } = state.filter;

// let products = [...all_products];

// // console.log(state);
// if (category !== "all") {
//   // console.log(products);
//   products = products.filter((product) => product.category === category);
// }

// if (company !== "all") {
//   // console.log("GGG");
//   products = products.filter((product) => product.company === company);
// }

// if (colors !== "all") {
//   products = products.filter((product) => {
//     // console.log("hhh", product.colors);
//     return product.colors.find((item) => item === colors);
//   });
// }

// if (shipping) {
//   console.log("jjj");
//   products = products.filter((product) => product.shipping === true);
// }

// if (text !== "") {
//   products = products.filter((product) =>
//     product.name.toLowerCase().startsWith(text)
//   );
// }

// if (price !== 309999) {
//   products = products.filter((product) => product.price <= price);
// }

// let filter = { ...state.filter, [name]: value };

// let filtered_products = products;

// return {
//   ...state,
//   filtered_products: products,
//   filter: { ...state.filter, [name]: value },
// };

// const {value} = action.payload;

// const { sort_by, filtered_products } = state;

// let tempProducts = [];

// if (sort_by === "Price (Lowest)") {
//   tempProducts = filtered_products.sort((a, b) => {
//     return a.price - b.price;
//   });
// }

// if (sort_by === "Price (Highest)") {
//   tempProducts = filtered_products.sort((a, b) => {
//     return b.price - a.price;
//   });
// }

// if (sort_by === "Name (A - Z)") {
//   tempProducts = filtered_products.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });
// }

// if (sort_by === "Name (Z - A)") {
//   tempProducts = filtered_products.sort((a, b) => {
//     return b.name.localeCompare(a.name);
//   });
// }
