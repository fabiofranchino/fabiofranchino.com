---
title: React and CRACO to import from root using alias
date: 2021-02-17 06:36:00 +0100
---



I'm used to use an alias to import starting from root instead with the back path in Vue.js.

In React there's no such thing out of the box.

Thanks to CRACO, it's possible to configure that with in `craco.config.js`:

```js
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
};
```

Found [here](https://stackoverflow.com/questions/63067555/how-to-make-an-import-shortcut-alias-in-create-react-app).

