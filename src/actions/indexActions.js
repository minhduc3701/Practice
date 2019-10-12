import * as types from "../constants/ActionTypes";

export const addCart = cart => {
  return {
    type: types.ADD_CART,
    cart
  };
};
