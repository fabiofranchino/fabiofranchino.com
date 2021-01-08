---
title: Disable PWA plugin in a Vue
date: 2021-01-08 14:49:00 +0100
---

.js App

Today I've learned how to disable an already intalled PWA plugin in a Vue.js project.

Here the solution you want to put in `vue.config.js` found out in [here](https://stackoverflow.com/questions/52800904/disable-pwa-plugin-in-vue-cli-3):

```js
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
  }
}
```

You have also to disable the `import` statement in `main.js` related to the service-worker file.