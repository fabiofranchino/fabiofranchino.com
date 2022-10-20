---
title: How to read a query parameter in Netlify Edge function
date: 2022-10-20 03:12:00 +0100
---



Here the function example:

```js
export default async (request, context) => {

    const url = new URL(request.url)
    
    const u = url.searchParams.get("u")

    return new Response(JSON.stringify({myParam: u}), {
        headers: { 'content-type': 'application/json' }
    })
}
```

