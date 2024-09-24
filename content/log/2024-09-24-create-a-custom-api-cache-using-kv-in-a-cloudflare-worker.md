---
title: Create a custom API cache using KV in a Cloudflare Worker
date: 2024-09-24 08:09:00 +0100
---





### Why use KV in Cloudflare Workers?

When exposing data via an API, especially one that frequently fetches data from a database, you might face performance issues or unnecessary costs if the database is queried too often. 

A solution is to cache the response in **Cloudflare KV storage** to reduce load and improve response times.

### Steps

**Set up KV Namespace** First, create a namespace for your KV storage in the Cloudflare dashboard:

- Go to Workers & KV.
- Create a new KV Namespace.

**Fetching from Cache** Whenever a request comes in, the first step is to check if there’s already a cached response in KV:

```javascript
res = await env.my_kv_namespace.get(request.url);
```

Here, `env.my_kv_namespace` refers to your KV namespace, and `request.url` acts as a cache key. If there's an existing cached response, you can return it immediately:

```javascript
if (res) {
  return new Response(res, {
    status: 200,
    headers: { 'Cache-Control': 'no-cache' }
  });
}
```

**Setting the Cache** If there's no cached response, fetch the data (e.g., from a database), then store the result in KV for future use:

```javascript
await env.my_kv_namespace.put(request.url, JSON.stringify(payload), { expirationTtl: CACHE_TTL });
```

- `payload` is the data you want to cache.
- `CACHE_TTL` is the expiration time (in seconds) for how long the cached data should be stored.

### Example Workflow

1. Client makes a request to your API.
2. Cloudflare Worker checks KV storage for a cached response using `request.url` as the key.
3. If a cached response exists, it returns that response.
4. If not, it fetches the data from your database, stores it in KV, and then returns the fresh data.

This approach minimizes database hits and speeds up the response times for your API.

### Code Example

In this code, we first check KV storage for the cached response and serve it if available. Otherwise, we fetch data from the database, cache it, and then serve it. The cache TTL is set to 1 hour (`3600` seconds).

```javascript
async function handleRequest(request, env) {
  // Check if the response is already cached
  let cachedResponse = await env.my_kv_namespace.get(request.url);
  
  if (cachedResponse) {
    return new Response(cachedResponse, {
      status: 200,
      headers: { 'Cache-Control': 'no-cache' }
    });
  }

  // Fetch data from your database (simulated here)
  const payload = { data: 'Fetched from DB' }; // Replace with real fetch logic
  
  // Cache the response
  await env.my_kv_namespace.put(request.url, JSON.stringify(payload), { expirationTtl: 3600 });

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
```

This method is efficient, scalable, and reduces strain on your database while providing faster responses to repeated API calls.

Hope this helps!