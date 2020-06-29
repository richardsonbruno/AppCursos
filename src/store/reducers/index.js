import { combineReducers } from "redux";

import menuReducers from "./menuReducers";
import nameReducer from "./nameReducer";
import routesReducers from "./routesReducers";

const rootReducers = combineReducers({
  menuReducers,
  nameReducer,
  routesReducers,
});

export default rootReducers;
