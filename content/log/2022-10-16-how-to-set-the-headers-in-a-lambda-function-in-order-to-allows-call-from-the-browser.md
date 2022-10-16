---
title: How to set the headers in a lambda function in order to allows call from the browser
date: 2022-10-16 07:42:00 +0100
---



Here the setting I use in my Netlify functions when I need to let the browse call them:

```js
// headers.js

module.exports = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Content-Type': 'application/json',
  'Content-Disposition': 'inline'
}
```

I can change the `Access-Control-Allow-Origin` with a specific domain if I want to limit the call from within that domain.

Here the lambda function:

```js
// index.js
const headers = require('./headers')

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers,
    body: 'OK'
  }
}

```

