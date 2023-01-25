---
title: How to rotate a body in Matter Js
date: 2023-01-25 04:58:00 +0100
---



This is the command to rotate a Body in Matter.js:

```js
// you have a body
const b = Matter.Bodies.rectangle(200,200,100,20)

// here how to rotate it:
Matter.Body.rotate(b, Math.PI / 4)
```

