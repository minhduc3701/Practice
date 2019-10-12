import { combineReducers } from "redux";
import products from "./products-R";

const addReducer = combineReducers({
  products
});

export default addReducer;
