---
title: Bring to front and restore an SVG element with D3
date: 2021-02-05 18:25:00 +0100
---



Here the solution to performe a bring-to-front and restore to its original stack position of an SVG element using D3.js.

Here the logic: 

- Find the actual index stack position and store it within the datum object before bring the element to front.
- Use that index number to revert back once you finished.

Here the relevan code, considering that the elements are bound with a dataset:

```js
elements.on('mouseenter', function(e, d){
  const list = [...this.parentNode.children]
  const index = list.indexOf(this)
  d.oindex = index
  this.parentNode.appendChild(this)
})
.on('mouseleave', function(e, d){
  const index = d.oindex
  this.parentNode.insertBefore(this, this.parentNode.children[index])
})
```

[Here](https://codepen.io/abusedmedia/pen/XWNXLxE) a live example.