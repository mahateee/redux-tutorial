import { combineReducers } from "redux";
import couterReducer from "./counterReducer";
import userReducer from "./userReducer";

export default combineReducers({
  counter: couterReducer,
  user: userReducer,
});
