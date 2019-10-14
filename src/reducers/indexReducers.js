import { combineReducers } from "redux";
import products from "./products-R";
import cart from "./cart";
import message from "./message";

const addReducer = combineReducers({
  products,
  cart,
  message
});

export default addReducer;
