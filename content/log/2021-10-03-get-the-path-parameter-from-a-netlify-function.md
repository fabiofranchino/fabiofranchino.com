---
title: Get the Path Parameter from a Netlify Function
date: 2021-10-03 08:48:00 +0100
---



As far as I know, a Netlify Functions doesn't implement natively the [path parameter](https://rapidapi.com/blog/api-glossary/parameters/path/) feature.

Netlify Functions' router ignores the additional path chunk, thus, the function is called correctly.

My solution sounds a bit hackish but, so far, it's the only way I found to get this feature back in a Netlify Functions:

Assuming you have the function `hello.js` with the following `hello world` code:

```js
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello!" })
  }
}
```

Here my solution to get a path parameter:

```js
exports.handler = async (event, context) => {
  
  // if I call `/.netlify/hello/10`
  
  const id = event.path.replace('/.netlify/hello/', '').replace(/\//gim, '')
  // id = '10'
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello!", id }) 
  }
  
  // you'll get { message: "Hello!", id: '10' }
}
```

It'd be great to have path parameters implemented natively within the `event` object.

Let's wait it, hopefully.