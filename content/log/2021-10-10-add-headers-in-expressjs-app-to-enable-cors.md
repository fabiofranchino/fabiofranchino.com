---
title: Add headers in ExpressJs app to enable CORS
date: 2021-10-10 11:13:00 +0100
---



Here a little middleware for an Express.js app to enable CORS requests that come from different origins:

```js
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
```

For some reason `app.use(cors())` is not enough.

