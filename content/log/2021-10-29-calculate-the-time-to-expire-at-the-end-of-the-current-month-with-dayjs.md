---
title: Calculate the time to expire at the end of the current month with DayJs
date: 2021-10-29 08:31:00 +0100
---



If you want to set an expiration time to a Redis record that matches the end of the current month, here the snippet using Day.js:

```js
const dayjs = require('dayjs')

const start = dayjs().unix()
const end = dayjs().endOf('month').unix()
const secondsToExpire = end - start
```

So, with ioRedis you can write something:

```js
redis.set('record:that:expires:end:month', 'Some content', 'EX', secondsToExpire)
```

