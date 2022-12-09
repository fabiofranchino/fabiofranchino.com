---
title: Convert the month pure number from Date into a two char string
date: 2022-12-09 07:45:00 +0100
---



In javascript the `new Date().getMonth()` return a number between 0 and 11, for instance, `1` is February.

If we need to create a new Date object from that month number, we need to convert it to something like `02` if it's February.

Here the code to do that, transforming the number into a string that keep into account the required leading `0` if necessary:

```js
const year = new Date().getFullYear()
const month = new Date().getMonth()
const day = new Date().getDate()

const monthStr = ('0' + (month+1)).slice(-2) 

const newDate = new Date(year + '-' + monthStr + '-' + day)
```



