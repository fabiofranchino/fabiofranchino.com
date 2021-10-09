---
title: How to remove empty strings from Array in Javascript
date: 2021-10-09 05:50:00 +0100
---



Here the snippet:

```js
var arr = ['a', '', 'b', 'other', null]

var noEmptyString = arr.filter(d => d && d !== '')

// ['a', 'b', 'other']
```

In case you have an array of objects:

```js
var arr = [
  {key: 'a'},
  {key: ''},
  {key: 'b'},
  {key: 'other'},
  {},
  {key: null}
]

var noEmptyString = arr.filter(d => d.key && d.key !== '')

// [{key: 'a'}, {key: 'b'}, {key: 'other'}]
```

