import * as types from "../constants/ActionTypes";

export const actAddCart = (product, quantity) => {
  return {
    type: types.ADD_CART,
    product,
    quantity
  };
};
export const actChangeMessage = message => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  };
};
