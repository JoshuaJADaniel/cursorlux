import React, { useState } from "react";
import PropTypes from "prop-types";

import colors from "data/colors";
import TabPanel from "components/TabPanel";
import RadioRow from "components/RadioRow";
import ColorPicker from "components/ColorPicker";
import SliderSection from "components/SliderSection";
import { percentFormat, pixelFormat } from "utils/formatString";

import { Divider, Box } from "@material-ui/core";

const BorderPanel = ({ value, index }) => {
  const [color, setColor] = useState(colors[0]);
  const [thickness, setThickness] = useState(4);
  const [opacity, setOpacity] = useState(20);
  const [style, setStyle] = useState("Solid");

  const options = ["Solid", "Dashed", "Dotted"];

  const handleColor = (color) => {
    setColor(color);
  };

  const handleThickness = (thickness) => {
    setThickness(thickness);
  };

  const handleOpacity = (opacity) => {
    setOpacity(opacity);
  };

  const handleStyle = (style) => {
    setStyle(style);
  };

  return (
    <TabPanel mounted value={value} index={index}>
      <div data-testid="radios">
        <RadioRow
          height={70}
          value={style}
          options={options}
          onChange={handleStyle}
        />
      </div>
      <Divider />
      <SliderSection
        title="Thickness"
        height={85}
        min={0}
        max={20}
        step={1}
        value={thickness}
        format={pixelFormat}
        onChange={handleThickness}
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
        title="Border Color"
        height={170}
        color={color}
        onChange={handleColor}
      />
      <Box height={5} />
    </TabPanel>
  );
};

BorderPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default BorderPanel;
