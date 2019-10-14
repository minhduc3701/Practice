import * as types from "../constants/ActionTypes";

export const actAddCart = cart => {
  return {
    type: types.ADD_CART,
    cart
  };
};
export const actChangeMessage = cart => {
  return {
    type: types.CHANGE_MESSAGE,
    cart
  };
};
