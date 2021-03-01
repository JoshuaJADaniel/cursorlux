import React from "react";
import PropTypes from "prop-types";
import { CirclePicker } from "react-color";

const ColorPicker = ({ color, onChange }) => {
  return (
    <CirclePicker
      color={color}
      onChange={onChange}
    />
  );
};

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
