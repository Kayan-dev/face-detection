import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import Images from "./image/reducer";

export default combineReducers({
  appState,
  user,
  Images,
});
