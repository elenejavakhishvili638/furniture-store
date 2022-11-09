const product_reducer = (state, action) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, sidebarOpen: true };
  }

  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, sidebarOpen: false };
  }
};

export default product_reducer;
