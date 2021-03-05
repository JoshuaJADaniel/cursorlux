import React, { useState } from "react";

import Alert from "components/Alert";
import Button from "components/Button";
import Header from "components/Header";
import Flexbox from "components/Flexbox";
import Navigation from "components/Navigation";

import ClickPanel from "components/ClickPanel";
import BorderPanel from "components/BorderPanel";
import BackgroundPanel from "components/BackgroundPanel";

import { Box } from "@material-ui/core";

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [alertState, setAlertState] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const switchTab = (newTab) => {
    setCurrentTab(newTab);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const saveSettings = () => {
    closeAlert();
    setTimeout(() => {
      let success = Math.random() < 0.5;
      setAlertState(success ? "success" : "error");
      setAlertMessage(success ? "Saved successfully!" : "Error, try again!");
      setAlertVisible(true);
    }, 200);
  };

  return (
    <>
      <Header />
      <Navigation
        current={currentTab}
        onChange={switchTab}
        options={["Click", "Background", "Border"]}
      />
      <ClickPanel index={0} value={currentTab} />
      <BackgroundPanel index={1} value={currentTab} />
      <BorderPanel index={2} value={currentTab} />
      <Alert
        onClose={closeAlert}
        severity={alertState}
        visible={alertVisible}
        message={alertMessage}
      />
      <Flexbox justifyContent="center">
        <Box width={280}>
          <Button height={85} onClick={saveSettings} text={"Save Settings"} />
        </Box>
      </Flexbox>
    </>
  );
};

export default App;
