import React from "react";
import PropTypes from "prop-types";

import TabPanel from "components/TabPanel";
import { Typography } from "@material-ui/core";

const BorderPanel = ({ value, index }) => (
  <TabPanel value={value} index={index}>
    <Typography variant="h5">Border Panel</Typography>
  </TabPanel>
);

BorderPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default BorderPanel;
