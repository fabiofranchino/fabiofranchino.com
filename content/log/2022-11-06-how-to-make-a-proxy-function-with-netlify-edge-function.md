---
title: How to make a proxy function with Netlify Edge Function
date: 2022-11-06 19:48:00 +0100
---



Here a Netlify Edge Function that acts as a Proxy Function.

A proxy function can be used for a variety of reasons, usually to hide some operations or credentials from the frontend.

In my case, I wanted to fetch the Figma API in order to get a Figma Document.

Figma requires an Auth Token to fetch their API, thus, the necessity to hide them  from the end-user.

Let's break the relevant parts:

The header configuration:

```js
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  'Access-Control-Allow-Methods': 'GET,OPTIONS',
  'Content-Type': 'application/json',
}
```

And the function itself:

```js
export default async (request, context) => {

  const url = new URL(request.url)
  const path = url.pathname.replace('/figma/', '/')
  const search = url.search
  
  let jsonData
  try{
    const figRes = await fetch('https://api.figma.com' + path + search, {
      headers: {
        'Accept': 'application/json',
        'X-Figma-Token': 'YOUR TOKEN'
      }
    })
    
    jsonData = await figRes.json()
  }catch(e){
    jsonData = e
  }

  return new Response(JSON.stringify(jsonData), {headers})

}
```

