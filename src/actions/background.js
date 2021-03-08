import {
  INIT_BACKGROUND,
  CHANGE_BACKGROUND_SIZE,
  CHANGE_BACKGROUND_COLOR,
  CHANGE_BACKGROUND_DELAY,
  CHANGE_BACKGROUND_OPACITY,
} from "actions/actionTypes";

const initBackground = (info) => ({
  type: INIT_BACKGROUND,
  payload: info,
});

const changeSize = (size) => ({
  type: CHANGE_BACKGROUND_SIZE,
  payload: size,
});

const changeColor = (color) => ({
  type: CHANGE_BACKGROUND_COLOR,
  payload: color,
});

const changeDelay = (delay) => ({
  type: CHANGE_BACKGROUND_DELAY,
  payload: delay,
});

const changeOpacity = (opacity) => ({
  type: CHANGE_BACKGROUND_OPACITY,
  payload: opacity,
});

export { initBackground, changeSize, changeColor, changeDelay, changeOpacity };
