---
title: How to read the body payload from a POST request in Netlify Edge function
date: 2022-10-20 03:12:00 +0100
---



Here the function example as per the title:

```js
export default async (request, context) => {
	
  	// you might want to check the method with `request.method === 'POST'`
  
    const body = await request.json()

    return new Response(body)
}
```

