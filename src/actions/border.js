import {
  INIT_BORDER,
  CHANGE_BORDER_COLOR,
  CHANGE_BORDER_STYLE,
  CHANGE_BORDER_OPACITY,
  CHANGE_BORDER_THICKNESS,
} from "actions/actionTypes";

const initBorder = (info) => ({
  type: INIT_BORDER,
  payload: info,
});

const changeThickness = (thickness) => ({
  type: CHANGE_BORDER_THICKNESS,
  payload: thickness,
});

const changeColor = (color) => ({
  type: CHANGE_BORDER_COLOR,
  payload: color,
});

const changeStyle = (style) => ({
  type: CHANGE_BORDER_STYLE,
  payload: style,
});

const changeOpacity = (opacity) => ({
  type: CHANGE_BORDER_OPACITY,
  payload: opacity,
});

export { initBorder, changeThickness, changeColor, changeStyle, changeOpacity };
