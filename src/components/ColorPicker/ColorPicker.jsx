import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import { CirclePicker } from "react-color";

import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ color, onChange }) => (
  <Box my={2}>
    <CirclePicker
      color={color}
      circleSpacing={0}
      onChange={onChange}
      className={styles.gridContainer}
    />
  </Box>
);

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
