---
title: FabricJs uniform scale and the common user expectation
date: 2021-08-11 14:00:00 +0100
---



The common behaviour of resizing objects freely vs preserving the object proportion present in any image editors is already built-in in Fabric.js, and that's great!

The problem is that the default setting is kinda the opposite to the common image editors out there.

If you begin resizing an object in a Fabric Canvas, the aspect-ratio of that object is preserved while by pressing the SHIFT command, it switches to the freely transformation mode.

I think this isn't consistent.

To revert back to the common user expectation, here the magic line of code from [doc](http://fabricjs.com/docs/fabric.Canvas.html#uniScaleKey):

```js
canvas.uniformScaling = false
```

Happy Fabric.js!