import React from "react";
import PropTypes from "prop-types";
import { Box, Slider, Typography } from "@material-ui/core";

const DefaultSlider = ({ title, value, onChange, size, percent, maxValue }) => {
  let max, min, format;

  if (size) {
    min = 0;
    max = maxValue || 80;
    format = (val) => `${val}px`;
  }

  if (percent) {
    min = 0;
    max = maxValue || 100;
    format = (val) => `${val}%`;
  }

  const parseChange = (event, value) => {
    onChange(value);
  };

  return (
    <Box mt={2.5} mb={0.5}>
      <Typography>{title}</Typography>
      <Slider
        marks
        step={5}
        max={max}
        min={min}
        value={value}
        onChange={parseChange}
        valueLabelDisplay="auto"
        valueLabelFormat={format}
      />
    </Box>
  );
};

DefaultSlider.propTypes = {
  size: PropTypes.bool,
  percent: PropTypes.bool,
  maxValue: PropTypes.number,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DefaultSlider;
