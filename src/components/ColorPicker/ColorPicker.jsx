import React from "react";
import PropTypes from "prop-types";
import { CirclePicker } from "react-color";

import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ color, onChange }) => {
  return (
    <CirclePicker
      color={color}
      circleSpacing={0}
      onChange={onChange}
      className={styles.gridContainer}
    />
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
