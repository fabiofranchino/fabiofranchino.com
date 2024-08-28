---
title: How to get the content type from the header in a Cloudflare Worker
date: 2024-08-28 15:47:00 +0100
---



When working with Cloudflare Workers and handling requests, you might need to check the `Content-Type` header to determine how to process the request body. Here's how you can do that:

### Getting the Content-Type from the Request Header

You can easily retrieve the `Content-Type` header from an incoming request by using the `headers.get()` method:

```js
const contentType = request.headers.get("content-type");
```



### Checking if the Content-Type is JSON

Once you have the `Content-Type`, you often need to verify if it indicates JSON data. You can do this by checking if the `contentType` string contains `"application/json"`:

```js
if (!contentType || !contentType.toLowerCase().includes("application/json")) {
    // Handle the case where the content type is not JSON
    // Possibly return an error or handle the request differently
}
```



### Example Usage in a Cloudflare Worker

Here’s a small example to demonstrate the usage in a Cloudflare Worker:

```js
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const contentType = request.headers.get("content-type");

    if (!contentType || !contentType.toLowerCase().includes("application/json")) {
        return new Response('Unsupported content type', { status: 415 });
    }

    const data = await request.json();
    // Process the JSON data...

    return new Response('JSON data received', { status: 200 });
}
```

In this example, if the `Content-Type` is not `application/json`, the worker responds with a 415 Unsupported Media Type status. If the content type is JSON, it processes the data accordingly.