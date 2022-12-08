---
title: How to calculate the days between today and the end of the year using DayJs
date: 2022-12-08 11:43:00 +0100
---



This is a snippet to calculate how many days there are between two given dates, one is now and the other is the end of the current year.

First, include DayJs library and time-zone extension:

```js
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
```

Then, here the code:

```js
var today = dayjs()
var thisYear = today.year()
var endOfYear = dayjs(thisYear + '-12-31')
var days = endOfYear.diff(today, 'day')
```

