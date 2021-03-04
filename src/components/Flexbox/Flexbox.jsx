import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

const Flexbox = ({ height, children, ...other }) => (
  <Box {...other} display="flex" height={height || null}>
    {children}
  </Box>
);

Flexbox.propTypes = {
  height: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Flexbox;
