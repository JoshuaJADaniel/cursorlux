// Since this application utilizes the global Chrome object (only available in
// production), the following creates a fully functioning mock implementation of
// the required storage features (getters, setters, callbacks, etc.).

if (process.env.NODE_ENV !== "production") {
  const { isArray, isString, has } = require("lodash");

  let dataStore = {
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
  };

  const syncGet = (items, callback) => {
    let data = {};

    if (isArray(items)) {
      items.forEach((item) => {
        if (has(dataStore, item)) {
          data[item] = dataStore[item];
        }
      });
    }

    if (isString(items) && has(dataStore, items)) {
      data[items] = dataStore[items];
    }

    callback(data);
  };

  const syncSet = (items, callback) => {
    dataStore = {
      ...dataStore,
      ...items,
    };

    callback();
  };

  global.chrome = {
    runtime: {
      lastError: false,
    },
    storage: {
      sync: {
        get: syncGet,
        set: syncSet,
      },
    },
  };
}
