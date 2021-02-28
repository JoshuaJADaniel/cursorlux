import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

const TabPanel = ({ index, value, children }) => (
  <div hidden={value !== index}>
    {value === index && <Box p={2}>{children}</Box>}
  </div>
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
