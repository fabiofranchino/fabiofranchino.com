---
title: Bring to front an SVG element with D3
date: 2021-02-05 18:25:00 +0100
---



A little reminder about how to bring to front an element in an SVG using D3.js.

The quick solution is to append the element again in the same container:

```js
elements.on('click', function(){
  this.parentNode.appendChild(this)
})
```

[Here](https://codepen.io/abusedmedia/pen/eYBJoaa?editors=1010) a live example.

