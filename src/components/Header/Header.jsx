import React from "react";

import FullLogo from "assets/full-logo.svg";
import { FiPauseCircle } from "react-icons/fi";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";

import styles from "./Header.module.scss";

const Header = () => (
  <AppBar position="static" color="transparent">
    <Toolbar>
      <img src={FullLogo} height={24} alt="Mouse Highlighter" />
      <div className={styles.grow} />
      <IconButton className={styles.button} edge="end">
        <FiPauseCircle size={28} strokeWidth={1.5} />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
