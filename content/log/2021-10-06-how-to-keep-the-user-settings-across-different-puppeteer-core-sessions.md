---
title: How to keep the user settings across different Puppeteer Core sessions
date: 2021-10-06 10:23:00 +0100
---



If you want to keep the user settings across different Puppeteer Core sessions, for instance, keep the same localStorage or cookies for authentication purposes, you can set a local `user` folder in the launch configuration options:

```js
const puppeteer = require('puppeteer-core')

let launchOptions = { 
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: [
    '--user-data-dir=/Users/username/some/folder/user'
  ]
}

const browser = await puppeteer.launch(launchOptions)
const page = await browser.newPage()
```

