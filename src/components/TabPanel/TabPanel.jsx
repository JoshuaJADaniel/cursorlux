import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Fade } from "@material-ui/core";

const TabPanel = ({ index, value, children }) => {
  const [timeout, setTimeout] = useState(0);

  useEffect(() => {
    setTimeout(600);
  }, []);

  return (
    <Fade in={value === index} timeout={timeout}>
      <Box pt={2} px={2.8} hidden={value !== index}>
        {children}
      </Box>
    </Fade>
  );
};

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default TabPanel;
