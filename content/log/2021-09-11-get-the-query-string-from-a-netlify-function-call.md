---
title: Get the Query String from a Netlify Function call
date: 2021-09-11 09:54:00 +0100
---



Netlify Functions give already an object with the query parameters passed on a request:

```js
const my = event.queryStringParameters.my
```

but if you need to do something else with that string, such as, parse it because you need nested parameters using, for example, the `query-string` parser, you can do something like:

```js
const qry = event.queryStringParameters

// get back the string from parameters
const queryStr = Object.keys(qry).map(key => `${key}=${qry[key]}`).join('&')

// parse with your lib of choice:
const query = queryString.parse('?' + queryStr)
```

For the record, I'm using a specific fork (github:wizbii/query-string) of  `query-string` that still supports nested parameters.