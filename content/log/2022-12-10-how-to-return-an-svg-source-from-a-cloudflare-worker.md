---
title: How to return an SVG source from a CloudFlare Worker
date: 2022-12-10 13:28:00 +0100
---



If you want to return an SVG generated source from a CloudfFlare Worker call, here the code:

```js
async function handleRequest (request) {
  const svg = `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 500 300">
      <circle r="50" cx="250" cy="150"></circle>
  </svg>`

  return new Response(svg, { headers: { 'content-type': 'image/svg+xml' } })
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
```

The above code, published as CloudFlare Worker will return a simple circle in a SVG file.

In case you'd like to experiment with chart generation within a Worker, take a look the source code of [this tiny project](https://github.com/abusedmedia/sparkchart) I did a while ago that generates little spark charts as SVG just passing some parameters.