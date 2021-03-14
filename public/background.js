chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.storage.sync.set({
      active: true,
      click: {
        size: 120,
        opacity: 30,
        enabled: true,
        color: "#2196f3",
      },
      background: {
        size: 120,
        delay: 0,
        opacity: 10,
        color: "#2196f3",
      },
      border: {
        thickness: 2,
        style: "Dashed",
        color: "#2196f3",
        opacity: 65,
      },
    });
  }
});
