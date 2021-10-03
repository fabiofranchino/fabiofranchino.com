---
title: How to get the Styles from a Figma document using their API with Nodejs
date: 2021-10-03 08:18:00 +0100
---



Once you have the [JSON document from a first Figma API call](/log/how-to-fetch-a-figma-document-using-their-api-in-nodejs), here the code to get the style definitions, if they have been defined in the document:

```js
// assuming `file` is the JSON document already retrieved from the Figma API

const styleNodes = Object.keys(file.styles).toString()

axios(`https://api.figma.com/v1/files/${docId}/nodes/?ids=${styleNodes}`, options).then(data => {
  console.log(data)
})
```

The above fetch return the list of all the styles and their CSS properties as well.

