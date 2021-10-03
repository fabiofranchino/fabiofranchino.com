---
title: Get the Image Buffer using Axios and Nodejs and convert it in Base64
date: 2021-10-03 11:51:00 +0100
---



This might be useful in some serverless functions where you need to load an image, do some manipulation and return a result:

```js
const axios = require('axios')

const func = async url => {
  const response = await axios(url, { responseType: 'arraybuffer' })
  const buffer64 = Buffer.from(response.data, 'binary').toString('base64')
  return buffer64
}
```

As a comparison, here the same result using `fs`:

```js
const fs = require('fs').promises

const func = async path => {
  const buffer64 = await fs.readFile(path, { encoding: 'base64' })
  return buffer64
}
```

