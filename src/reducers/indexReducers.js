import { combineReducers } from "redux";
import products from "./products-R";
import cart from "./cart";

const addReducer = combineReducers({
  products,
  cart
});

export default addReducer;
