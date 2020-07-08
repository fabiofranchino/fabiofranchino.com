require('dotenv').config()
const axios = require('axios')

const MAILCHIMP_URL = `us17.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`
const mailchimpUrl = `https://user:${process.env.MAILCHIMP_PASS}@${MAILCHIMP_URL}`

exports.handler = async (event, context) => {
  const email = event.queryStringParameters.m

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
