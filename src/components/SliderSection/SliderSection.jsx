import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

import SliderRow from "components/SliderRow";
import Flexbox from "components/Flexbox";

const SliderSection = ({
  min,
  max,
  step,
  title,
  height,
  value,
  format,
  onChange,
}) => {
  const onChangeWrapper = (event, value) => {
    onChange(value);
  };

  return (
    <Flexbox height={height || null} alignItems="center">
      <Box pt={1.5} pb={0.3125} width="100%">
        <Typography gutterBottom>{title}</Typography>
        <SliderRow
          max={max}
          min={min}
          step={step}
          value={value}
          onChange={onChangeWrapper}
          valueLabelFormat={format}
        />
      </Box>
    </Flexbox>
  );
};

SliderSection.propTypes = {
  height: PropTypes.number,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.func.isRequired,
};

export default SliderSection;
