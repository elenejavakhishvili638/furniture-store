const product_reducer = (state, action) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, sidebarOpen: true };
  }

  // if (action.type === "SHOW_CART") {
  //   console.log(action.type);
  //   return { ...state, showCart: true };
  // }

  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, sidebarOpen: false };
  }

  if (action.type === "LOADING_TRUE") {
    // console.log(true);
    return { ...state, loading: true };
  }

  if (action.type === "LOADING_FALSE") {
    // console.log(false);
    return { ...state, loading: false };
  }

  if (action.type === "LOAD_PRODUCTS") {
    const featuredProducts = action.payload.filter(
      (product) => product.featured === true
    );
    // console.log(featuredProducts);
    return {
      ...state,
      featuredProducts: featuredProducts,
    };
  }

  if (action.type === "PRODUCTS") {
    return { ...state, products: action.payload };
  }
};

export default product_reducer;
