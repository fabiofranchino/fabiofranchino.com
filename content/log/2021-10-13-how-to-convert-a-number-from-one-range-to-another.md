---
title: How to convert a number from one range to another
date: 2021-10-13 12:16:00 +0100
---



Here the function I use:

```js
const scaleValue = (value, from, to) => {
  const scale = (to[1] - to[0]) / (from[1] - from[0])
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
  return capped * scale + to[0]
}

export default scaleValue
```

And the way to use it:

```js
const v = scaleValue(20, [0,100], [0, 400])
// 80
```

