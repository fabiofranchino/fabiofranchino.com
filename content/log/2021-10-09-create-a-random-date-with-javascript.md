---
title: Create a random Date with Javascript
date: 2021-10-09 16:22:00 +0100
---



Here a little snippet to create a random Date passing a range:

```js
const randomDate = (from, to) => {
  from = from.getTime()
  to = to.getTime()
  return new Date(from + Math.random() * (to - from))
}
```

Here how to use it:

```js
const d = randomDate(new Date(2010, 0, 0), new Date(2021, 0, 0)).toISOString()

// '2016-06-21T19:32:30.940Z'
```

