---
title: How to fetch a Figma document using their API in Nodejs
date: 2021-10-03 08:13:00 +0100
---



Here the javascript snippet to retrieve the JSON version of a Figma document.

Remember that you need a valid API-TOKEN for such operation in you user settings, also known as **personal access tokens**.

First, a couple of settings for our `axios` configuration:

```js
const docId = '<YOUR-DOCUMENT-ID>'

const options = {
    headers: {
      'X-Figma-Token': '<YOUR-PERSONAL-ACCESS-TOKEN>'
    }
}
```

Then, the actual fetch:

```js
axios(`https://api.figma.com/v1/files/${docId}`, options).then(data => {
  const file = res.data
})
```

The `file` variable will contain the JSON description of the whole Figma file.