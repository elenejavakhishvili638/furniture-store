const filter_reducer = (state, action) => {
  if (action.type === "CHANGE_COMPANY") {
    console.log(state, action.payload);
    return { ...state, filter: { ...state.filter, company: action.payload } };
  }

  if (action.type === "CHANGE_PRICE") {
    return { ...state, sort_by: action.payload };
  }
};

export default filter_reducer;
