import * as types from "../constants/ActionTypes";

let data = JSON.parse(localStorage.getItem("CART"));

let initialState = data ? data : [];

const cart = (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1;
  switch (action.type) {
    case types.ADD_CART:
      index = findIndexProduct(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case types.REMOVE_ITEM_CART:
      index = findIndexProduct(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case types.UPDATE_PRODUCT_IN_CART:
      index = findIndexProduct(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    default:
      return [...state];
  }
};

let findIndexProduct = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cart;
