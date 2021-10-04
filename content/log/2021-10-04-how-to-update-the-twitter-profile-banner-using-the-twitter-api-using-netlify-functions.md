---
title: How to Update the Twitter Profile Banner using the Twitter API using Netlify Functions
date: 2021-10-04 03:18:00 +0100
---



You might be interested also [to this post](/log/how-to-get-twitter-user-info-using-twitter-api-in-a-netlify-functions).

Here the code to create a Netlify Functions that receives a URL of an image and update your Twitter Profile Banner.

You need a Twitter Developer Account and relative credentials.

Twitter setup and dependencies:

```js
const axios = require('axios')
const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})
```

The function handler:

```js
exports.handler = async (event, context) => {
	
  // get the remote image as binary buffer
  const response = await axios(url, { responseType: 'arraybuffer' })
  
  // convert it as Base64, since it's required by the Twitter API
  const buffer = Buffer.from(response.data, 'binary').toString('base64')
	
  // call the Twitter API
  const res = await client.post('account/update_profile_banner', { banner: buffer })

  return {
    headers,
    statusCode: 200,
    body: JSON.stringify({ok:true})
  }
}
```

For brevity, I'm not checking and validating input values, but you should do it!

