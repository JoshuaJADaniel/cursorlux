// Since this application utilizes the global Chrome object (only available in
// production), the following creates a fully functioning mock implementation of
// the required storage features (getters, setters, callbacks, etc.).

if (process.env.NODE_ENV !== "production") {
  const { isArray, isString, has } = require("lodash");

  let dataStore = {};

  const syncGet = (items, callback) => {
    let data = {};

    if (isArray(items)) {
      items.map((item) => {
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
    storage: {
      sync: {
        get: syncGet,
        set: syncSet,
      },
    },
  };
}
