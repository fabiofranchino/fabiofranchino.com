---
title: How to filter an array using a time range value
date: 2022-06-05 09:34:00 +0100
---



Here my solution to sort an Array based on a range date value, start and end date/time.

Basically, we rely on the `getTime()` Date function that gives us the simple absolute number we can use for our filtering operation:

```js
const data = [
  {date: '2020-01-02'},
  {date: '2020-01-03'},
  {date: '2020-01-05'}
]

const start = new Date('2020-01-02').getTime()
const end = new Date('2020-01-04').getTime()

const filtered = data.filter(d => {
  const t = new Date(d.date).getTime()
  return t >= start && t <= end
})

// filtered:
// [{date: '2020-01-02'},{date: '2020-01-03'}]
```

