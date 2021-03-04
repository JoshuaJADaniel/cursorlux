import React from "react";
import PropTypes from "prop-types";
import Flexbox from "components/Flexbox";
import { Button as MuiButton } from "@material-ui/core";

const Button = ({ text, height, onClick }) => (
  <Flexbox height={height} alignItems="center">
    <MuiButton
      fullWidth
      size="large"
      color="primary"
      variant="contained"
      onClick={onClick}
    >
      {text}
    </MuiButton>
  </Flexbox>
);

Button.propTypes = {
  height: PropTypes.number,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
