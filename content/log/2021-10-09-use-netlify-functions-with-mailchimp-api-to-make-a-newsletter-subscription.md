---
title: Use Netlify Functions with MailChimp API to make a newsletter subscription
date: 2021-10-09 11:40:00 +0100
---



I've recently removed from this blog the form to subscribe for newsletter.

Nevertheless, I can share how it was implemented from tech perspective.

I've already did and [wrote](/blog/mailchimp-bridge-for-jamstack-website) a similar using a different stack.

Now, it's the turn of Netlify Functions with MailChimp API.

Here the code in its full glory:

```js
const axios = require('axios')

const mUrl = `us17.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`
const mailchimpUrl = `https://user:${process.env.MAILCHIMP_PASS}@${mUrl}`

exports.handler = async (event, context) => {
  const email = event.queryStringParameters.email

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing email' }),
      headers: {
        'Access-Control-Allow-Origin': process.env.NUXT_ENV_FRONT_DOMAIN
      }
    }
  }

  let msg = 'ok'

  const req = await axios({
    method: 'post',
    url: mailchimpUrl,
    data: { email_address: email, status: 'subscribed' },
    headers: { 'content-type': 'application/json' }
  })

  if (req.response && req.status !== 200) {
    msg = req.response.statusText
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: msg }),
    headers: {
      'Access-Control-Allow-Origin': process.env.NUXT_ENV_FRONT_DOMAIN
    }
  }
}
```



