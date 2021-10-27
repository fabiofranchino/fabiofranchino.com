---
title: Check if valid email with RegExp in javascript
date: 2021-10-27 15:55:00 +0100
---



Here the script I use when I need to enable/disable the email submit button:

```js
var patt = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g
const isValid = email.match(patt)
```

