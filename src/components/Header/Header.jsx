import React, { useEffect, useState } from "react";

import FullLogo from "assets/full-logo.svg";
import { strToBool, boolToStr } from "utils/typeConversions";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";

import styles from "./Header.module.scss";

const Header = () => {
  const [active, setActive] = useState(true);

  const handleActive = () => {
    const newActive = !active;

    if (chrome && chrome.storage) {
      chrome.storage.sync.set({ active: boolToStr(newActive) }, () => {
        setActive(newActive);
      });
      return;
    }

    setActive(newActive);
  };

  useEffect(() => {
    if (chrome && chrome.storage) {
      chrome.storage.sync.get("active", ({ active }) => {
        setActive(strToBool(active));
      });
    }
  }, []);

  return (
    <AppBar
      color="transparent"
      position="static"
      className={styles.headerSpacing}
    >
      <Toolbar>
        <img src={FullLogo} height={24} alt="Mouse Highlighter" />
        <div className={styles.grow} />
        <IconButton
          edge="end"
          onClick={handleActive}
          className={styles.buttonColors}
        >
          {active ? (
            <FiPauseCircle size={28} strokeWidth={1.5} />
          ) : (
            <FiPlayCircle size={28} strokeWidth={1.5} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
