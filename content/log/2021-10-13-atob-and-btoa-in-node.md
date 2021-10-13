---
title: AtoB and BtoA in Node
date: 2021-10-13 14:41:00 +0100
---



atob in Node.js:

```js
const atob = (base64) => {
  return Buffer.from(base64, 'base64').toString('binary')
}
```

btoa in Node.js:

```js
const btoa = (text) => {
    return Buffer.from(text, 'binary').toString('base64');
}
```

Source [here](https://dirask.com/posts/Node-js-atob-btoa-functions-equivalents-1Aqb51).

