---
title: Set overwrite as default in GSAP
date: 2021-01-29 06:08:00 +0100
---



Note to self: to set `overwrite` always true by default on all GSAP tweens, configure the `defauls` property:

```js
gsap.defaults({
  overwrite: true
})
```

By default is `auto`, just to know.