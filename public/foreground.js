// Namespace used for SVG related elements
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

// Identifiers used by CSS
const BACKGROUND_ID = "clickBackground";
const EFFECT_CLASS = "clickEffect";

// Chrome storage setting keys
const ACTIVE = "active";
const CLICK = "click";
const BORDER = "border";
const BACKGROUND = "background";

// Setting storage and elements
let activated, backgroundElement;
let clickSettings, backgroundSettings, borderSettings;

chrome.storage.sync.get(
  [ACTIVE, CLICK, BORDER, BACKGROUND],
  ({ active, click, border, background }) => {
    activated = active;
    clickSettings = click;
    borderSettings = border;
    backgroundSettings = background;

    initializeBackground();
    updateStyles();

    if (active) {
      addListeners();
    }
  }
);

chrome.storage.onChanged.addListener((changes) => {
  for (const [key, info] of Object.entries(changes)) {
    const { newValue } = info;

    switch (key) {
      case ACTIVE:
        activated = newValue;
        activated ? addListeners() : removeListeners();
        break;
      case CLICK:
        clickSettings = newValue;
        activated && clickSettings.enabled
          ? document.addEventListener("mousedown", clickListener)
          : document.removeEventListener("mousedown", clickListener);
        break;
      case BACKGROUND:
        backgroundSettings = newValue;
        break;
      case BORDER:
        borderSettings = newValue;
        break;
    }
  }

  updateStyles();
});

function initializeBackground() {
  backgroundElement = document.createElementNS(SVG_NAMESPACE, "svg");

  backgroundElement.id = BACKGROUND_ID;
  backgroundElement.setAttribute("viewBox", "0 0 24 24");
  backgroundElement.setAttribute("xmlns", SVG_NAMESPACE);

  const circle = document.createElementNS(SVG_NAMESPACE, "circle");
  ["cx", "cy", "r"].forEach((attribute) => {
    circle.setAttribute(attribute, "12");
  });

  backgroundElement.appendChild(circle);
  document.body.appendChild(backgroundElement);
}

function updateStyles() {
  backgroundElement.style.display = activated ? "block" : "none";
  backgroundElement.setAttribute("width", backgroundSettings.size);
  backgroundElement.setAttribute("height", backgroundSettings.size);
  backgroundElement.setAttribute("stroke-width", borderSettings.thickness);

  backgroundElement.setAttribute(
    "stroke",
    hexToRgba(borderSettings.color, borderSettings.opacity / 100)
  );

  backgroundElement.setAttribute(
    "fill",
    hexToRgba(backgroundSettings.color, backgroundSettings.opacity / 100)
  );
}

function createClick(x, y) {
  const click = document.createElement("div");
  click.className = EFFECT_CLASS;

  click.style.top = `${y}px`;
  click.style.left = `${x}px`;
  click.style.width = `${clickSettings.size}px`;
  click.style.height = `${clickSettings.size}px`;

  const child = document.createElement("div");
  child.style.background = hexToRgba(
    clickSettings.color,
    clickSettings.opacity
  );

  click.appendChild(child);

  return click;
}

function clickListener(event) {
  const clickElement = createClick(event.clientX, event.clientY);

  document.body.appendChild(clickElement);

  clickElement.addEventListener(
    "animationend",
    function () {
      clickElement.parentElement.removeChild(clickElement);
    }.bind(this)
  );
}

function backgroundListener(event) {
  backgroundElement.style.top = `${event.clientY}px`;
  backgroundElement.style.left = `${event.clientX}px`;
}

function cursorExitListener() {
  backgroundElement.style.opacity = 0;
}

function cursorEnterListener() {
  backgroundElement.style.opacity = 1;
}

function addListeners() {
  document.addEventListener("mousemove", backgroundListener);
  document.addEventListener("mouseleave", cursorExitListener);
  document.addEventListener("mouseenter", cursorEnterListener);

  if (clickSettings.enabled) {
    document.addEventListener("mousedown", clickListener);
  }
}

function removeListeners() {
  document.removeEventListener("mousemove", backgroundListener);
  document.removeEventListener("mouseleave", cursorExitListener);
  document.removeEventListener("mouseenter", cursorEnterListener);
  document.removeEventListener("mousedown", clickListener);
}

function extractRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function hexToRgba(hex, opacity) {
  return `rgba(${extractRgb(hex).join(", ")}, ${opacity})`;
}
