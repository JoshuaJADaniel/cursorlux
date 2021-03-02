import React from "react";
import PropTypes from "prop-types";
import { Radio, RadioGroup, FormControlLabel, Box } from "@material-ui/core";

import styles from "./RadioSet.module.scss";

const RadioSet = ({ value, options, onChange }) => {
  const onChangeWrapper = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box mb={2}>
      <RadioGroup
        value={value}
        onChange={onChangeWrapper}
        className={styles.flexOverrides}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            label={option}
            control={<Radio size="small" color="primary" />}
          >
            {option}
          </FormControlLabel>
        ))}
      </RadioGroup>
    </Box>
  );
};

RadioSet.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadioSet;
