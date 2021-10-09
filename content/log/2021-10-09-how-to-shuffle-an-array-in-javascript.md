---
title: How to shuffle an Array in Javascript
date: 2021-10-09 16:22:00 +0100
---



My preferred function to shaffle an array:

```js
const shuffle = arr => {
  const array = arr.slice()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
```

```js
shuffle([1, 4, 7, 8])
```

