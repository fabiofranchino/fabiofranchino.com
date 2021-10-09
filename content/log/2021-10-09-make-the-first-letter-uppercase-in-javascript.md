---
title: Make the first letter uppercase in javascript
date: 2021-10-09 11:25:00 +0100
---



Here my preferred snippet:

```js
var s = 'hello'

s.charAt(0).toUpperCase() + s.slice(1)

// 'Hello'
```

