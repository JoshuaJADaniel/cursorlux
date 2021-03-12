import React from "react";
import PropTypes from "prop-types";

import {
  changeSize,
  changeDelay,
  changeColor,
  changeOpacity,
} from "actions/background";
import { useSelector, useDispatch } from "react-redux";
import { percentFormat, pixelFormat, secondFormat } from "utils/formatString";

import TabPanel from "components/TabPanel";
import ColorPicker from "components/ColorPicker";
import SliderSection from "components/SliderSection";

import { Divider, Box } from "@material-ui/core";

const BackgroundPanel = ({ value, index }) => {
  const dispatch = useDispatch();

  const size = useSelector((state) => state.background.size);
  const color = useSelector((state) => state.background.color);
  const delay = useSelector((state) => state.background.delay);
  const opacity = useSelector((state) => state.background.opacity);

  const handleColor = (color) => {
    dispatch(changeColor(color));
  };

  const handleOpacity = (opacity) => {
    dispatch(changeOpacity(opacity));
  };

  const handleSize = (size) => {
    dispatch(changeSize(size));
  };

  const handleDelay = (delay) => {
    dispatch(changeDelay(delay));
  };

  return (
    <TabPanel mounted value={value} index={index}>
      <Box height={10} />
      <SliderSection
        title="Size"
        height={75}
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
        height={80}
        min={0}
        max={100}
        step={5}
        value={opacity}
        format={percentFormat}
        onChange={handleOpacity}
      />
      <Divider />
      <SliderSection
        title="Follow Delay"
        height={75}
        min={0}
        max={0.5}
        step={0.05}
        value={delay}
        format={secondFormat}
        onChange={handleDelay}
      />
      <Divider />
      <ColorPicker
        title="Background Color"
        height={170}
        color={color}
        onChange={handleColor}
      />
      <Box height={5} />
    </TabPanel>
  );
};

BackgroundPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default BackgroundPanel;
