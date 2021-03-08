import {
  INIT_CLICK,
  CHANGE_CLICK_SIZE,
  CHANGE_CLICK_COLOR,
  CHANGE_CLICK_ENABLED,
  CHANGE_CLICK_OPACITY,
} from "actions/actionTypes";

const initClick = (info) => ({
  type: INIT_CLICK,
  payload: info,
});

const changeSize = (size) => ({
  type: CHANGE_CLICK_SIZE,
  payload: size,
});

const changeColor = (color) => ({
  type: CHANGE_CLICK_COLOR,
  payload: color,
});

const changeEnabled = (enabled) => ({
  type: CHANGE_CLICK_ENABLED,
  payload: enabled,
});

const changeOpacity = (opacity) => ({
  type: CHANGE_CLICK_OPACITY,
  payload: opacity,
});

export { initClick, changeSize, changeColor, changeEnabled, changeOpacity };
