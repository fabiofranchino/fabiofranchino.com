---
title: How to get the client location and ip in a Cloudflare Worker
date: 2024-08-30 09:50:00 +0100
---





To get the client location and IP address in a Cloudflare Worker, you can use the `cf` object and the `cf-connecting-ip` header. Here's how you can do it:

**Extract the `cf` object** from the incoming request to access Cloudflare-specific data, such as the client's location:

```js
const { cf } = request || {};
```

**Get the client’s country and city** using the `cf` object:

```js
const { country, city } = cf || {};
```

**Retrieve the client’s IP address** from the request headers:

```js
const ip = request.headers.get('cf-connecting-ip');
```

### Example:

```js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
  // Extract Cloudflare specific information
  const { cf } = request || {};
  const { country, city } = cf || {};
  const ip = request.headers.get('cf-connecting-ip');
  
  // Response with the client information
  return new Response(`IP: ${ip}, Country: ${country}, City: ${city}`, {
    headers: { 'content-type': 'text/plain' },
  });
}
```

This simple worker script will respond with the client's IP address, country, and city when the worker is invoked.

