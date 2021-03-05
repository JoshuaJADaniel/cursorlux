import React from "react";
import PropTypes from "prop-types";

import colors from "data/colors";
import Flexbox from "components/Flexbox";
import CirclePicker from "react-color/lib/Circle";
import { Box, Typography } from "@material-ui/core";

import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ title, height, color, onChange }) => {
  const onChangeWrapper = (info) => {
    onChange(info.hex);
  };

  return (
    <Flexbox height={height} alignItems="flex-end">
      <Box width="100%">
        <Typography>{title}</Typography>
        <Box mt={2}>
          <CirclePicker
            color={color}
            colors={colors}
            circleSpacing={0}
            onChange={onChangeWrapper}
            className={styles.gridContainer}
          />
        </Box>
      </Box>
    </Flexbox>
  );
};

ColorPicker.propTypes = {
  height: PropTypes.number,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
