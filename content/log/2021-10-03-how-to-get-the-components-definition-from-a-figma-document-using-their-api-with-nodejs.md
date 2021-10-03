---
title: How to get the Components definition from a Figma document using their API with Nodejs
date: 2021-10-03 08:33:00 +0100
---



As it happens with the Styles, the Figma document retrieved from their official API, the components are defined only as reference ID.

If you want to know all the inner properties and further nested components reference you have to performe an additional fetch.

Once you have the [JSON document from a first Figma API call](https://www.fabiofranchino.com/log/how-to-fetch-a-figma-document-using-their-api-in-nodejs), here the code to get the style definitions, if they have been defined in the document:

```js
// assuming `file` is the JSON document already retrieved from the Figma API

const componentsNodes = Object.keys(file.components).toString()

axios(`https://api.figma.com/v1/files/${docId}/nodes/?ids=${componentsNodes}`, options).then(data => {
  console.log(data)
})
```

The above fetch return the list of all the components and their inner properties as well.