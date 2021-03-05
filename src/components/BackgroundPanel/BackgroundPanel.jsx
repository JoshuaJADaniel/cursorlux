import React, { useState } from "react";
import PropTypes from "prop-types";

import colors from "data/colors";
import TabPanel from "components/TabPanel";
import ColorPicker from "components/ColorPicker";
import SliderSection from "components/SliderSection";
import { percentFormat, pixelFormat, secondFormat } from "utils/formatString";

import { Divider, Box } from "@material-ui/core";

const BackgroundPanel = ({ value, index }) => {
  const [color, setColor] = useState(colors[0]);
  const [opacity, setOpacity] = useState(20);
  const [delay, setDelay] = useState(0.05);
  const [size, setSize] = useState(40);

  const handleColor = (color) => {
    setColor(color);
  };

  const handleOpacity = (opacity) => {
    setOpacity(opacity);
  };

  const handleSize = (size) => {
    setSize(size);
  };

  const handleDelay = (delay) => {
    setDelay(delay);
  };

  return (
    <TabPanel mounted value={value} index={index}>
      <Box height={10} />
      <SliderSection
        title="Size"
        height={75}
        min={0}
        max={100}
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
