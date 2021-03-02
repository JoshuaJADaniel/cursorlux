import React from "react";
import PropTypes from "prop-types";
import { Box, Slider, Typography } from "@material-ui/core";

const DefaultSlider = ({
  title,
  step,
  value,
  pixels,
  percent,
  maxValue,
  onChange,
}) => {
  let max, min, format;

  if (pixels) {
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
    <Box mt={2.5} mb={0.8}>
      <Typography>{title}</Typography>
      <Slider
        marks
        max={max}
        min={min}
        value={value}
        step={step || 5}
        onChange={parseChange}
        valueLabelDisplay="auto"
        valueLabelFormat={format}
      />
    </Box>
  );
};

DefaultSlider.propTypes = {
  pixels: PropTypes.bool,
  percent: PropTypes.bool,
  step: PropTypes.number,
  maxValue: PropTypes.number,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DefaultSlider;
