const cart_reducer = (state, action) => {
  if (action.type === "INCREASE_AMOUNT") {
    const { id, amount, stock } = action.payload;

    const tempCart = state.cart_list.map((item) => {
      if (item.id === id) {
        let newAmount = item.amount + 1;
        if (newAmount > stock) {
          newAmount = stock;
        }
        return { ...item, amount: newAmount };
      } else {
        return item;
      }
    });

    console.log(id);
    return { ...state, cart_list: tempCart };
  }

  if (action.type === "DECREASE_AMOUNT") {
    const { id, amount, stock } = action.payload;

    const tempCart = state.cart_list
      .map((item) => {
        if (item.id === id) {
          let newAmount = item.amount - 1;
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount !== 0);

    console.log(id);
    return { ...state, cart_list: tempCart };
  }

  if (action.type === "ADD_TO_CART") {
    // const existingItem = state.cart_list.find((item) => item.id === id);

    const { product, amount, color } = action.payload;
    const { id, name, price, stock, images } = product;
    // let existingItem = [...state.cart_list];

    let existingList = state.cart_list.find((item) => item.id === id);

    // console.log(images[0].url);

    if (existingList) {
      const list = state.cart_list.map((item) => {
        // console.log(item.stock);
        if (item.id === id) {
          let newAmount = item.amount + amount;
          if (newAmount > item.stock) {
            newAmount = item.stock;
          }
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart_list: list };
      // if (existingList.id === id) {
      //   let newAmount = existingList.amount + amount;
      //   if (newAmount > existingList.stock) {
      //     newAmount = existingList.stock;
      //   }
      //   return { ...existingList, amount: newAmount };
      // }
      // else {
      //   return { ...state, cart_list: [...state.cart_list] };
      // }
      // return {...state, cart_list: existingList}
      // return [...state.cart_list, { ...existingList, amount: newAmount }];
    } else {
      // let newList = [...state.cart_list];
      // newList.push(action.payload);
      const newList = {
        id,
        name,
        price,
        amount,
        color,
        stock,
        image: images[0].url,
      };
      return { ...state, cart_list: [...state.cart_list, newList] };
    }
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart_list: [] };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const filteredList = state.cart_list.filter(
      (item) => item.id !== action.payload
    );

    // console.log(filteredList);

    return { ...state, cart_list: filteredList };
  }

  if (action.type === "CALCULATE_TOTALS") {
    const totals = state.cart_list.reduce(
      (cartTotal, item) => {
        const { price, amount } = item;
        const itemPrice = (price / 100) * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemPrice;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    const { total, amount } = totals;
    console.log("ll", totals);
    return { ...state, total_item: amount, total_amount: total };
  }
};

export default cart_reducer;
