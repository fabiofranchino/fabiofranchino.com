---
title: How to Custom Cache a Response in a Cloudflare Worker
date: 2024-09-20 08:25:00 +0100
---



Cloudflare Workers are an excellent way to create scalable and performant endpoints, especially when you want to minimize server load. 

But, when these workers interact with external services, such as databases or APIs, you might need to shield your endpoints from being overwhelmed by repeated requests.

One effective strategy is caching responses for a limited period. 

This allows your worker to serve the same response for repeated requests within a short time frame, without having to reprocess the same data.

### The Approach

Cloudflare Workers support caching natively, making it super straightforward. The idea is simple: check if the response is already in the cache. If it is, return it immediately and skip any further processing. If not, you fetch or compute the response, store it in the cache, and serve it.

Here’s a basic setup:

```js
const cache = caches.default
const key = new Request(new URL(request.url).toString(), request)
const res = await cache.match(key)
```

If the response exists in the cache, return it right away:

```js
if (res) {
  return res
}
```

If not, do the necessary work (like querying a database or calling an API), then cache the response:

```js
const response = new Response(JSON.stringify(payload), {headers:{...headers, 'Cache-Control': 'public, max-age=' + time}})
ctx.waitUntil(cache.put(key, response.clone(), {cacheTtl: time}))

return response
```

The `time` parameter in `max-age` defines how long the response should be cached, for example, 300 seconds (5 minutes).

### Here to sum up:

- **Check Cache**: The worker looks for the response in the cache using `cache.match(key)`. If it's found, the process stops here.
- **Return Cached Response**: If the cache has the data, return it immediately, saving time and resources.
- **Cache a New Response**: If no cached data exists, compute the response and store it using `cache.put(key, response.clone())`.
- **TTL (Time-to-Live)**: Define how long the response stays cached with `cacheTtl`. For example, caching for 300 seconds can handle bursts of traffic without overwhelming your external services.

### Why Use This?

Caching in Cloudflare Workers is a great way to enhance performance and reduce load on your backend services. By caching responses, especially for repeated requests, you cut down on processing time and external requests, ultimately making your system more resilient to high traffic.

And the best part? It's so easy to implement.