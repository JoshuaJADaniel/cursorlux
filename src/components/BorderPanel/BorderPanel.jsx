import React from "react";
import PropTypes from "prop-types";

import {
  changeColor,
  changeStyle,
  changeOpacity,
  changeThickness,
} from "actions/border";
import borderTypes from "data/borderTypes";
import { useSelector, useDispatch } from "react-redux";
import { percentFormat, pixelFormat } from "utils/formatString";

import TabPanel from "components/TabPanel";
import RadioRow from "components/RadioRow";
import ColorPicker from "components/ColorPicker";
import SliderSection from "components/SliderSection";

import { Divider, Box } from "@material-ui/core";

const BorderPanel = ({ value, index }) => {
  const dispatch = useDispatch();

  const color = useSelector((state) => state.border.color);
  const style = useSelector((state) => state.border.style);
  const opacity = useSelector((state) => state.border.opacity);
  const thickness = useSelector((state) => state.border.thickness);

  const handleStyle = (style) => {
    dispatch(changeStyle(style));
  };

  const handleColor = (color) => {
    dispatch(changeColor(color));
  };

  const handleThickness = (thickness) => {
    dispatch(changeThickness(thickness));
  };

  const handleOpacity = (opacity) => {
    dispatch(changeOpacity(opacity));
  };

  return (
    <TabPanel mounted value={value} index={index}>
      <div data-testid="radios">
        <RadioRow
          height={70}
          value={style}
          options={borderTypes}
          onChange={handleStyle}
        />
      </div>
      <Divider />
      <SliderSection
        title="Thickness"
        height={85}
        min={1}
        max={10}
        step={0.5}
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
