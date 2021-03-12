import React from "react";
import PropTypes from "prop-types";

import {
  changeSize,
  changeColor,
  changeOpacity,
  changeEnabled,
} from "actions/click";
import { useSelector, useDispatch } from "react-redux";
import { percentFormat, pixelFormat } from "utils/formatString";

import Flexbox from "components/Flexbox";
import TabPanel from "components/TabPanel";
import ColorPicker from "components/ColorPicker";
import SliderSection from "components/SliderSection";

import { Divider, Checkbox, FormControlLabel, Box } from "@material-ui/core";

const ClickPanel = ({ value, index }) => {
  const dispatch = useDispatch();

  const color = useSelector((state) => state.click.color);
  const enabled = useSelector((state) => state.click.enabled);
  const opacity = useSelector((state) => state.click.opacity);
  const size = useSelector((state) => state.click.size);

  const handleEnabled = (event) => {
    dispatch(changeEnabled(event.target.checked));
  };

  const handleColor = (color) => {
    dispatch(changeColor(color));
  };

  const handleOpacity = (opacity) => {
    dispatch(changeOpacity(opacity));
  };

  const handleSize = (size) => {
    dispatch(changeSize(size));
  };

  return (
    <TabPanel mounted value={value} index={index}>
      <Flexbox height={70}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={enabled}
              onChange={handleEnabled}
            />
          }
          label="Enable Click Effect?"
        />
      </Flexbox>
      <Divider />
      <SliderSection
        title="Size"
        height={85}
        min={0}
        max={160}
        step={5}
        value={size}
        format={pixelFormat}
        onChange={handleSize}
      />
      <Divider />
      <SliderSection
        title="Opacity"
        height={85}
        min={0}
        max={100}
        step={5}
        value={opacity}
        format={percentFormat}
        onChange={handleOpacity}
      />
      <Divider />
      <ColorPicker
        title="Click Effect Color"
        height={170}
        color={color}
        onChange={handleColor}
      />
      <Box height={5} />
    </TabPanel>
  );
};

ClickPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default ClickPanel;
