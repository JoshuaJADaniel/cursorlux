import React from "react";
import styles from "./Navigation.module.scss";
import { AppBar, Tab, Tabs } from "@material-ui/core";

const Navigation = ({ current, options, onChange }) => {
  const onChangeWrapper = (event, value) => {
    onChange(value);
  };

  return (
    <AppBar position="static" className={styles.navigationStyling}>
      <Tabs variant="fullWidth" value={current} onChange={onChangeWrapper}>
        {options.map((option) => (
          <Tab
            key={option}
            label={option}
            aria-label={option}
            className={styles.buttonOpacity}
          />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default Navigation;
