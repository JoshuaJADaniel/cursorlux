import React, { useEffect, useState } from "react";

import FullLogo from "assets/full-logo.svg";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";

import styles from "./Header.module.scss";

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
      className={styles.headerSpacing}
    >
      <Toolbar>
        <img src={FullLogo} height={24} alt="Logo" />
        <div className={styles.grow} />
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
