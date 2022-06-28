---
title: Spread all the properties from Array of Objects into an object
date: 2022-06-28 05:14:00 +0100
---



This is the way:

```js
const other = {c:3}

const arr = [
  {a:1, b:2}
]

// spread both an object props and an array of object props as well:
const res = Object.assign({}, other, ...arr)
```

