import { combineReducers } from "redux";

import menuReducers from "./menuReducers";
import nameReducer from "./nameReducer";

const rootReducers = combineReducers({
  menuReducers,
  nameReducer,
});

export default rootReducers;
