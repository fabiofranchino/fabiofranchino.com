---
title: How to change the gravity in Matter Js Engine
date: 2023-01-25 04:58:00 +0100
---



Here the way to change the gravity value at runtime in a Matter.js engine instance:

```js
// suppose this engine
var engine = Engine.create()

// engine.gravity contains the default gravity value
/*
gravity: {
	x: 0,
	y: 1,
	scale: 0.001
},
*/

// change it at runtime:
engine.gravity.y = 0.3
```

Learned from the source code [here](https://github.com/liabru/matter-js/blob/f1ba9b583ba92a56d307d63c850a0330d26bbd5e/src/core/Engine.js#L45).