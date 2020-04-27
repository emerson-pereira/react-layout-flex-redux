import { combineReducers } from "redux";
import menuReducer from "./menu";

const allReducers = combineReducers({
  menu: menuReducer,
});

export default allReducers;
