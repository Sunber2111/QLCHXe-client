import { combineReducers } from "redux";
import category from "./category";
import modal from "./modal";
import car from "./car";
import employee from "./employee";
import customer from "./customer";
import store from "./store";
import order from "./order";
import pur from './pur'

export default combineReducers({
  category,
  modal,
  car,
  employee,
  customer,
  store,
  order,
  pur,
});
