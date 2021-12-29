---
title: How to control the cache when Redirect in a Cloudflare worker
date: 2021-12-29 12:31:00 +0100
---



If you need to disable the browser cache in a Cloudflare worker when Redirect, such as:

```js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest (request) {
	
  return Response.redirect('https://www.example.com/', statusCode)
  
}
```

The `statusCode` param is the key part:

- 301 if you want to cache the request
- 302 if you DON'T want to cache the request