const stateButton = document.getElementById("state-button");

// Deals with initial load to setup image
chrome.storage.sync.get(["active"], (result) => {
  setTogglerBackground(stateButton, result.active);
});

// Deals with state button click events that should:
// A) Alternate extension internal state
// B) Alternate state button frontend image
stateButton.addEventListener("click", () => {
  chrome.storage.sync.get(["active"], (result) => {
    const newActiveState = !result.active;
    chrome.storage.sync.set({ active: newActiveState }, () => {
      console.log(`popup.js: flipped state to ${newActiveState}`);
      setTogglerBackground(stateButton, newActiveState);
    });
  });
});

// Used to set frontend images for toggler elements
function setTogglerBackground(element, active) {
  if (active) {
    element.classList.remove("play-image");
    element.classList.add("pause-image");
  } else {
    element.classList.remove("pause-image");
    element.classList.add("play-image");
  }
}
