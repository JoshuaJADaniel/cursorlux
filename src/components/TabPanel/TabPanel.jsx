import React from "react";
import PropTypes from "prop-types";
import { Box, Fade } from "@material-ui/core";

const TabPanel = ({ index, value, children }) => (
  <Fade in={value === index} timeout={600}>
    <Box pt={2} px={2.8} hidden={value !== index}>
      {children}
    </Box>
  </Fade>
);

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default TabPanel;
