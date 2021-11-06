---
title: How to add styles to an HTML element from a string
date: 2021-11-06 14:05:00 +0100
---



Here the little snippet:

```js
const div = document.createElement('div')
const styles = 'width:100%;background-color:red;'
div.setAtribute('style', styles)
```

