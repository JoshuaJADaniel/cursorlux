import {
  INIT_CLICK,
  CHANGE_CLICK_SIZE,
  CHANGE_CLICK_COLOR,
  CHANGE_CLICK_ENABLED,
  CHANGE_CLICK_OPACITY,
} from "actions/actionTypes";

const clickDefaults = {
  color: "",
  size: 0,
  opacity: 0,
  enabled: false,
};

const clickReducer = (state = clickDefaults, action) => {
  switch (action.type) {
    case INIT_CLICK:
      return {
        ...action.payload,
      };
    case CHANGE_CLICK_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case CHANGE_CLICK_ENABLED:
      return {
        ...state,
        enabled: action.payload,
      };
    case CHANGE_CLICK_OPACITY:
      return {
        ...state,
        opacity: action.payload,
      };
    case CHANGE_CLICK_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};

export default clickReducer;
