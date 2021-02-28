import React from "react";
import PropTypes from "prop-types";

import TabPanel from "components/TabPanel";
import { Typography } from "@material-ui/core";

const BackgroundPanel = ({ value, index }) => (
  <TabPanel value={value} index={index}>
    <Typography variant="h5">Background Panel</Typography>
  </TabPanel>
);

BackgroundPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default BackgroundPanel;
