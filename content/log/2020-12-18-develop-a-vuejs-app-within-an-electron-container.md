---
title: Develop a Vuejs app within an Electron container
date: 2020-12-18 15:07:00 +0100
---



Here my take to develop a Vue.js UI using SFC (Webpack and Vue CLI) within an Electron app.

## Scaffolding

First off, I've created a Vue.js app using `vue create my-app` then I've added `npm i -D electron` to the project.

## Vue Config

I've added this config in `vue.config.js` to make the build version work:

```js
module.exports = {
  publicPath: ''
}
```

## Main.js

In the `main.js`  file of Electron I've put, in the `createWindow` function, this condition:

```js
if(process.env.PROD){
  win.loadFile('dist/index.html')
}else{
  win.loadURL('http://localhost:8080/')
}
```

This way I can test both the `serve` version and the `build` version as well.

## Package.json

In `package.json` I've added the first two `scripts` commands:

```json
"start": "electron .",
"prod": "PROD=true electron .",
"serve": "vue-cli-service serve",
"build": "vue-cli-service build"
```

To start a development session, I run `npm run serve` to launch the local webpack server for Vue and then `npm start` to launch Electron app.

Since Electron loads the `http://localhost:8080/` page I'll get instant reload on each edit.

To check the build version, I run `npm run build` and then `npm run prod` to launch Electron using the build version.

Easy-peasy.