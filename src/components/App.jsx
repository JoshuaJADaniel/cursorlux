import React, { useState } from "react";

import Header from "components/Header";
import ClickPanel from "components/ClickPanel";
import BorderPanel from "components/BorderPanel";
import BackgroundPanel from "components/BackgroundPanel";
import { AppBar, Tabs, Tab } from "@material-ui/core";

export default function SimpleTabs() {
  const [currentTab, setCurrentTab] = useState(0);

  const switchTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Header />
      <AppBar position="static">
        <Tabs variant="fullWidth" value={currentTab} onChange={switchTab}>
          <Tab label="Click" />
          <Tab label="Background" />
          <Tab label="Border" />
        </Tabs>
      </AppBar>
      <ClickPanel index={0} value={currentTab} />
      <BackgroundPanel index={1} value={currentTab} />
      <BorderPanel index={2} value={currentTab} />
    </div>
  );
}
