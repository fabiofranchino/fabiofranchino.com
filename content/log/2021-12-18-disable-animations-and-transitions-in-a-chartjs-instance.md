---
title: Disable animations and transitions in a Chartjs instance
date: 2021-12-18 12:20:00 +0100
---



Here the tip:

```js
const config = {
  type: 'line',
  data: [],
  options:{
    animation: false,
  }
}

const chart = new Chart('#chart', config)
```

