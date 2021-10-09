---
title: Remove duplicates from an Array of String
date: 2021-10-09 05:58:00 +0100
---



This is my preferred way:

```js
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

// ['A', 'B', 'C']
```

