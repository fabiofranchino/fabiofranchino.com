---
title: How to flatten an Array with nested arrays
date: 2021-10-09 16:12:00 +0100
---



Suppose this array:

```js
const source = ['This is a string', 1, 2, [3], [4, [5, 6]], [[7]], 8, '[10, 11]']
```

And want to get:

```js
 // ["This is a string", 1, 2, 3, 4, 5, 6, 7, 8, "[10, 11]"
```

You can use this function:

```js
function flatten (hold, arr) {
  arr.forEach(d => {
    if (Array.isArray(d)) {
      flatten(hold, d)
    } else {
      hold.push(d)
    }
  })
}
```

In this way:

```js
const res = []
flatten(res, source)
```

