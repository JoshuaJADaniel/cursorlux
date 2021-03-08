import {
  INIT_BACKGROUND,
  CHANGE_BACKGROUND_SIZE,
  CHANGE_BACKGROUND_COLOR,
  CHANGE_BACKGROUND_DELAY,
  CHANGE_BACKGROUND_OPACITY,
} from "actions/actionTypes";

const backgroundDefaults = {
  color: "",
  size: 0,
  delay: 0,
  opacity: 0,
};

const backgroundReducer = (state = backgroundDefaults, action) => {
  switch (action.type) {
    case INIT_BACKGROUND:
      return {
        ...action.payload,
      };
    case CHANGE_BACKGROUND_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case CHANGE_BACKGROUND_DELAY:
      return {
        ...state,
        delay: action.payload,
      };
    case CHANGE_BACKGROUND_OPACITY:
      return {
        ...state,
        opacity: action.payload,
      };
    case CHANGE_BACKGROUND_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};

export default backgroundReducer;
