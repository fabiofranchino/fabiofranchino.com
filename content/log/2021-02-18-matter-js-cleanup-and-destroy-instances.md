---
title: Matter js cleanup and destroy instances
date: 2021-02-18 11:51:00 +0100
---



If you want to use a [Matter](https://brm.io/matter-js/) instance in a React component, I bet that you need to destroy the instance when the component unmount.

Here the code to do that:

```js
Render.stop(render)
World.clear(engine.world)
Engine.clear(engine)
render.canvas.remove()
render.canvas = null
render.context = null
render.textures = {}
```

Solution grabbed from [here](https://github.com/liabru/matter-js/issues/564).

