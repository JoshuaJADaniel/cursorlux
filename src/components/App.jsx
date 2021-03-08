import React, { useEffect, useState } from "react";

import { initClick } from "actions/click";
import { initBorder } from "actions/border";
import { initBackground } from "actions/background";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();

  const clickSettings = useSelector((state) => state.click);
  const borderSettings = useSelector((state) => state.border);
  const backgroundSettings = useSelector((state) => state.background);

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

    const updatedSettings = {
      click: clickSettings,
      border: borderSettings,
      background: backgroundSettings,
    };

    chrome.storage.sync.set(updatedSettings, () => {
      let success = !chrome.runtime.lastError;
      setAlertState(success ? "success" : "error");
      setAlertMessage(success ? "Saved successfully!" : "Error, try again!");
      setAlertVisible(true);
    });
  };

  useEffect(() => {
    chrome.storage.sync.get(
      ["active", "click", "background", "border"],
      ({ active, click, background, border }) => {
        dispatch(initClick(click));
        dispatch(initBorder(border));
        dispatch(initBackground(background));
      }
    );
  }, [dispatch]);

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
        <Box width={278}>
          <Button height={85} onClick={saveSettings} text={"Save Settings"} />
        </Box>
      </Flexbox>
    </>
  );
};

export default App;
