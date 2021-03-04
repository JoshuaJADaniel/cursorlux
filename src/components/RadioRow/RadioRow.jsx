import React from "react";
import PropTypes from "prop-types";

import Flexbox from "components/Flexbox";
import { Radio, RadioGroup, FormControlLabel, Box } from "@material-ui/core";

import styles from "./RadioRow.module.scss";

const RadioRow = ({ height, value, options, onChange }) => {
  const onChangeWrapper = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Flexbox height={height} alignItems="center">
      <Box width="100%">
        <RadioGroup
          row
          value={value}
          onChange={onChangeWrapper}
          className={styles.flexOverrides}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              label={option}
              control={<Radio label={option} size="small" color="primary" />}
            >
              {option}
            </FormControlLabel>
          ))}
        </RadioGroup>
      </Box>
    </Flexbox>
  );
};

RadioRow.propTypes = {
  height: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadioRow;
