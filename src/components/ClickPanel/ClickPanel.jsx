import React from "react";
import PropTypes from "prop-types";

import TabPanel from "components/TabPanel";
import { Typography } from "@material-ui/core";

const ClickPanel = ({ value, index }) => (
  <TabPanel value={value} index={index}>
    <Typography variant="h5">Click Panel</Typography>
  </TabPanel>
);

ClickPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default ClickPanel;
