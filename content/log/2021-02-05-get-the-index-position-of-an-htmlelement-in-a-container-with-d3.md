---
title: Get the index position of an HTMLElement in a container with D3
date: 2021-02-05 18:25:00 +0100
---



If you want to know the index position of an SVG element in a collection, such as the SVG itself or a group, here the solution:

```js
elements.on('click', function(e, d){
  
    const list = [...this.parentNode.children]
    const index = list.indexOf(this)
    console.log(index)
  
})
```

[Here](https://codepen.io/abusedmedia/pen/Rworzdb?editors=0011) a live example.

