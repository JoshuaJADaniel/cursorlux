import { combineReducers } from "redux";

import clickReducer from "reducers/click";
import borderReducer from "reducers/border";
import backgroundReducer from "reducers/background";

const allReducers = combineReducers({
  click: clickReducer,
  border: borderReducer,
  background: backgroundReducer,
});

export default allReducers;
