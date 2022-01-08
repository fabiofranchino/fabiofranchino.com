---
title: How to check if all fonts are loaded with javascript
date: 2022-01-08 09:44:00 +0100
---



Within modern browsers it wouldn't be more easier than that:

```js
document.fonts.ready.then(() => {
  // do something
})
```

