---
title: Express wildcard origin snippet
date: 2020-07-23 18:09:00 +0100
---



Here for future reference, assuming a typical `express` app, the middleware to accept any origin for every requests:

```js


app.use(cors())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
```

You need to install `cors`, though.

Source [here](https://www.positronx.io/express-cors-tutorial/).