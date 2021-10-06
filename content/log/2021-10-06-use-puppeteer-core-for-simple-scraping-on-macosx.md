---
title: Use Puppeteer Core for simple scraping on MacOsX
date: 2021-10-06 10:23:00 +0100
---



For quick scraping activities, `puppeteer-core` is simply great and very fast to set up and use.

You need to configure the Chrome path since it requires an already installed version of it:

```js
const puppeteer = require('puppeteer-core')

let launchOptions = { 
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
}

const browser = await puppeteer.launch(launchOptions)
```

Then, the usual Puppeteer functions:

```js
const page = await browser.newPage()
await page.goto(url)
```

And finally, the scraping part, this example gets all the `p` tag in the page:

```js
const res = await page.evaluate(() => {
  const ob = {}

  ob.images = [...document.querySelectorAll('p')]
  ob.images = ob.images.map(p => p.innerText)
	
  return ob
})
```

And of course, the closing session:

```js
await browser.close()

console.log(res)
```



