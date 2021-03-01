import React, { useState } from "react";

import FullLogo from "assets/full-logo.svg";
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";

import styles from "./Header.module.scss";

const Header = () => {
  const [active, setActive] = useState(true);

  const handleActive = () => setActive(!active);

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <img src={FullLogo} height={24} alt="Mouse Highlighter" />
        <div className={styles.grow} />
        <IconButton className={styles.button} onClick={handleActive} edge="end">
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
