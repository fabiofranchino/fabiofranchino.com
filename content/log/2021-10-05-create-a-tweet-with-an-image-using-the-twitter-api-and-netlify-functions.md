---
title: Create a Tweet with an Image using the Twitter API and Netlify Functions
date: 2021-10-05 13:41:00 +0100
---



Following [this previous post](/log/how-to-update-the-twitter-profile-banner-using-the-twitter-api-using-netlify-functions), here the code to set a Netlify Function that post a Tweet with an image attached.

As in the previous posts, you need a Twitter Developer Account and relative credentials in order to make it to work.

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

The function handler with some comments between the lines:

```js

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)
  
  // check the parameters
  const url = body.url
  const text = body.text
	
  // fetch the image and convert it in base64
  const response = await axios(url, { responseType: 'arraybuffer' })
  const buffer = Buffer.from(response.data, 'binary').toString('base64')

  // upload the media first
  const res1 = await client.post('media/upload', {
    media_data: buffer
  })

  // grab the media id required for the tweet creation
  const mediaId = res1.media_id_string

  // post the tweet
  const res2 = await client.post('statuses/update', {
    status: text,
    media_ids: mediaId
  })

	// give the response to the request
  return {
    headers,
    statusCode: 200,
    body: JSON.stringify({ok:'true'})
  }
}
```

