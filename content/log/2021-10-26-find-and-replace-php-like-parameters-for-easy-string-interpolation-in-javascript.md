---
title: Find and replace PHP-like parameters for easy string interpolation in javascript
date: 2021-10-26 08:15:00 +0100
---



If you want to interpolate a user-provided string that contains some parameters, here my solution using RegExp:

```js
const str = '<h1>$title</h1><p>$text</p><p>$other</p>'
const reg = /\$([a-zA-Z0-9]+)\b/gim
const res = str.match(reg)

const params = {
  $title: 'Some Title',
  $text: 'Some text'
}

let ret = str
res.forEach(p => {
    const v = params[p] || ''
    ret = ret.replace(p, v)
})

console.log(ret)
```

