chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.storage.sync.set({
      active: true,
      click: {
        size: 40,
        opacity: 35,
        enabled: true,
        color: "#e91e63",
      },
      background: {
        size: 80,
        delay: 0.35,
        opacity: 10,
        color: "#8bc34a",
      },
      border: {
        thickness: 10,
        style: "Solid",
        color: "#ff9800",
        opacity: 80,
      },
    });
  }
});
