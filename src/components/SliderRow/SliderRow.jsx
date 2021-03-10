import React from "react";
import { Slider as MuiSlider, withStyles } from "@material-ui/core";

const Slider = withStyles({
  valueLabel: {
    top: "-28px",
    left: "calc(50% - 20px)",
    "& *": {
      transform: "none",
    },
    "& > span": {
      width: "40px",
      height: "22px",
      borderRadius: "4px",
    },
  },
})(MuiSlider);

const SliderRow = ({ ...props }) => (
  <Slider marks {...props} valueLabelDisplay="auto" />
);

export default SliderRow;
