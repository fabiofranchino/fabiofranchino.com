---
title: Deploy a Vue.js App in a subfolder
date: 2021-01-24 09:47:00 +0100
---



This is what you need to check when deploy a Vue.js app in a subfolder.

By default a Vue.js build works out of the box if it's in the root of the webserver.

Here the parts you need to check and eventually edit in order to make it works.

## vue.config.js

In `vue.config.js` this is the parameter you may edit based on your situation:

```js
module.exports = {
  publicPath: ''
}
```

## VueRouter

If your app uses VueRouter, check the value of the `base` config in the router:

```js
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
```

I'd change it with `process.env.VUE_APP_BASE_URL` and add `.env.production` in your root. Then, build it with `vue-cli-service build --mode production`