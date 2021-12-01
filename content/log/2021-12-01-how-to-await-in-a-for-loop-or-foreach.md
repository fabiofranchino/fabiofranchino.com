---
title: How to await in a for loop or forEach
date: 2021-12-01 19:03:00 +0100
---



TIL I've learned how to use async/await and a for-loop.

Suppose you have something like:

```js
const arr = [1, 2, 3]
const res = []

arr.forEach(async v => {
  const r = await getSomething()
  res.push(r)
})

console.log(res)
```

The above code doesn't work as expected. ForEach will not wait the resolution of all its await statements.

Here the solution:

```js
const arr = [1, 2, 3]
const res = []

for(const v of arr)
  const r = await getSomething()
  res.push(r)
})

console.log(res)
```

The [for of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)  make the trick!