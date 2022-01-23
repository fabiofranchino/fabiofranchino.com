---
title: How to like tweets automatically with Twitter API and Netlify Serverless functions
date: 2022-01-23 06:46:00 +0100
---



Here the code to build a bot that can automatically like a given tweet (maybe that comes from a Twitter search) and "like" it on your behalf:

```js
const client = require('./twitterClient')

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  const id = body.id
  
  const  res = await client.post('favorites/create', { id })

  return {
    headers,
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

```

Please refer [to this post](/log/how-to-update-the-twitter-profile-banner-using-the-twitter-api-using-netlify-functions/) to learn more about basic setup and auth.