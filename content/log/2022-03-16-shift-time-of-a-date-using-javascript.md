---
title: Shift Time of a Date using javascript
date: 2022-03-16 08:40:00 +0100
---



Here an handy snippet to shift the time of a given Date object:

```js
const offset = 1

const now = new Date()

const shifted = new Date(now.getTime() + (offset*60*60*1000))
```

This way you can format using the native Intl object:

```js
const res = new Intl.DateTimeFormat('it-IT', {timeStyle: 'long'}).format(shifted)
```

