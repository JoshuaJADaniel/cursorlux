import {
  INIT_BORDER,
  CHANGE_BORDER_COLOR,
  CHANGE_BORDER_STYLE,
  CHANGE_BORDER_OPACITY,
  CHANGE_BORDER_THICKNESS,
} from "actions/actionTypes";

const borderDefaults = {
  color: "",
  style: "",
  opacity: 0,
  thickness: 0,
};

const borderReducer = (state = borderDefaults, action) => {
  switch (action.type) {
    case INIT_BORDER:
      return {
        ...action.payload,
      };
    case CHANGE_BORDER_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case CHANGE_BORDER_STYLE:
      return {
        ...state,
        style: action.payload,
      };
    case CHANGE_BORDER_THICKNESS:
      return {
        ...state,
        thickness: action.payload,
      };
    case CHANGE_BORDER_OPACITY:
      return {
        ...state,
        opacity: action.payload,
      };
    default:
      return state;
  }
};

export default borderReducer;
