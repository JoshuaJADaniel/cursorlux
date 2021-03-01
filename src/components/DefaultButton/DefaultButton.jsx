import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@material-ui/core";

const DefaultButton = ({ message, onClick, fixed }) => (
  <Box position={fixed ? "absolute" : "static"} m={fixed ? 2.8 : 0} bottom={0}>
    <Button size="large" color="primary" variant="contained" onClick={onClick}>
      {message}
    </Button>
  </Box>
);

DefaultButton.propTypes = {
  fixed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default DefaultButton;
