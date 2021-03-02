import React from "react";
import PropTypes from "prop-types";
import { CirclePicker } from "react-color";
import { Box, Typography } from "@material-ui/core";

import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ title, color, onChange }) => (
  <Box my={2}>
    <Typography>{title}</Typography>
    <Box my={2}>
      <CirclePicker
        color={color}
        circleSpacing={0}
        onChange={onChange}
        className={styles.gridContainer}
      />
    </Box>
  </Box>
);

ColorPicker.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
