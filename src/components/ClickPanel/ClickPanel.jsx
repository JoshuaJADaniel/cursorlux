import React, { useState } from "react";
import PropTypes from "prop-types";

import colors from "data/colors";
import Flexbox from "components/Flexbox";
import TabPanel from "components/TabPanel";
import ColorPicker from "components/ColorPicker";
import SliderSection from "components/SliderSection";
import { percentFormat, pixelFormat } from "utils/formatString";

import { Divider, Checkbox, FormControlLabel, Box } from "@material-ui/core";

const ClickPanel = ({ value, index }) => {
  const [color, setColor] = useState(colors[0]);
  const [enabled, setEnabled] = useState(true);
  const [opacity, setOpacity] = useState(20);
  const [size, setSize] = useState(40);

  const handleEnabled = (event) => {
    setEnabled(event.target.checked);
  };

  const handleColor = (color) => {
    setColor(color);
  };

  const handleOpacity = (opacity) => {
    setOpacity(opacity);
  };

  const handleSize = (size) => {
    setSize(size);
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
        max={100}
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
