import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Fade } from "@material-ui/core";

import styles from "./TabPanel.module.scss";

const TabPanel = ({ index, value, children }) => {
  const [timeout, setTimeout] = useState(0);

  useEffect(() => {
    setTimeout(600);
  }, []);

  return (
    <Fade in={value === index} timeout={timeout}>
      <div className={styles.wrapper} hidden={value !== index}>
        {children}
      </div>
    </Fade>
  );
};

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TabPanel;
