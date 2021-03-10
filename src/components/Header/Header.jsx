import React, { useEffect, useState } from "react";

import FullLogo from "assets/full-logo.svg";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import {
  AppBar,
  Toolbar,
  IconButton,
  withStyles,
  Tooltip as MuiTooltip,
} from "@material-ui/core";

import styles from "./Header.module.scss";

const Tooltip = withStyles({
  tooltipPlacementLeft: {
    margin: "0",
  },
})(MuiTooltip);

const Header = () => {
  const [active, setActive] = useState(true);

  const handleActive = () => {
    const newActive = !active;
    chrome.storage.sync.set({ active: newActive }, () => {
      setActive(newActive);
    });
  };

  useEffect(() => {
    chrome.storage.sync.get("active", ({ active }) => {
      setActive(active);
    });
  }, []);

  return (
    <AppBar
      color="transparent"
      position="static"
      elevation={0}
      className={styles.headerSpacing}
    >
      <Toolbar>
        <img src={FullLogo} height={24} alt="Logo" />
        <div className={styles.grow} />
        <Tooltip placement="left" title={active ? "Pause" : "Activate"}>
          <IconButton
            edge="end"
            onClick={handleActive}
            className={styles.buttonStyles}
            aria-label={active ? "Pause" : "Activate"}
          >
            {active ? (
              <FiPauseCircle size={28} role="img" />
            ) : (
              <FiPlayCircle size={28} role="img" />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
