---
title: How to remove the last character from a string in javascript
date: 2021-11-01 04:36:00 +0100
---



Here the my preferred code:

```js
const str = 'Hello!'
const res = str.slice(0, -1) // Hello
```

The `-1` is the number of char you want to remove from the end. Neat!