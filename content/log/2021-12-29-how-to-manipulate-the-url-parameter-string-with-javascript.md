---
title: How to manipulate the URL parameter string with javascript
date: 2021-12-29 14:59:00 +0100
---



Here a snippet that allows to convert and manipulate the URL parameter string:

```js
const q = '?z=1&a=2&b=3&skip=10'

const params = new URLSearchParams(q)
const obParams = Object.fromEntries(params.entries())
const normParams = Object.keys(obParams)
	.filter(d => d !== 'skip') // remove 'skip' parameter
	.sort() // sort by keys
	.map(key => `${key}=${obParams[key]}`)
	.join('&')

console.log(normParams) // a=2&b=3&z=1
```

