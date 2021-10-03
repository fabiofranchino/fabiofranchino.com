---
title: How to get Twitter User info using Twitter API in a Netlify Functions
date: 2021-10-03 14:42:00 +0100
---



Interacting with the Twitter API with Node.js is pretty simple thanks to the `twitter` library.

After you've activated your [Developer Account](https://developer.twitter.com/en) and created a project with the generated credentials, it's just a matter of wrapping some code in a Netlify function:

```js
const Twitter = require('twitter')

new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})


exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  
  const screen_name = body.screen_name
  
  // check if the required param is present
  if (!screen_name) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error: true, message: 'Missing screen_name' })
    }
  }
	
  // fetch the API
  const res = await client.get('users/show', { screen_name })
	
  // return the result
  return {
    headers,
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

```

The above function require a POST request. I should add a guard of the httpMethod.