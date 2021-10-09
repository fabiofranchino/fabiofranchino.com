---
title: How to convert a full name to an acronym with the initials
date: 2021-10-09 16:22:00 +0100
---



So, your name is John Doe and want to get JD in javascript?

```js
const shortNames = n => {
  return n.split(' ').map(d => d.substr(0, 1).toUpperCase()).join('')
}

shortNames('John Doe') // JD
```

