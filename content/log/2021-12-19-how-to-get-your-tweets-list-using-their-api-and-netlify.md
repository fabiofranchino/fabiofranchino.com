---
title: How to get your Tweets list using their API and Netlify
date: 2021-12-19 10:54:00 +0100
---



Here the script that you can put in a Netlify serverless function to fetch the latest tweets list from a given account:

```js
const client = require('./common/twitterClient')

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  
  const screenName = body.screen_name

  const res = await client.get('statuses/user_timeline', { 
    screen_name: screenName, 
    count: 200 
  })

  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

```

For reference, here the `twitterClient.js` content:

```js
const Twitter = require('twitter')

module.exports = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})
```

