import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@material-ui/core";

const DefaultButton = ({ message, onClick, spaced }) => (
  <Box m={spaced ? 2.8 : 0}>
    <Button size="large" color="primary" variant="contained" onClick={onClick}>
      {message}
    </Button>
  </Box>
);

DefaultButton.propTypes = {
  spaced: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default DefaultButton;
