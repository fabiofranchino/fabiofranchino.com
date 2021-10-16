---
title: Build a simple Proxy with Netlify Functions
date: 2021-10-16 11:22:00 +0100
---



Proxies allows to overcome some limitations the browser impose for security reasons.

If you want to load in the browser a file from another domain that doesn't allow the cross-origin request, you can use a proxy, a middleman that loads that file for you and then pass it to the client.

```js
const axios = require('axios')

exports.handler = async (event, context) => {
  const url = event.queryStringParameters.url

  const res = await axios(url)
  const src = res.data

  return {
    statusCode: 200,
    body: src
  }
}