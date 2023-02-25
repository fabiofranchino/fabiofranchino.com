---
title: Clone an element in D3js and append into another wrapper
date: 2023-02-25 06:26:00 +0100
---



This looked like a very easy task at first, but, as happen often, it wasn't.

I wanted to clone an SVG element from one wrapper and append it to another wrapper. It turned out it requires a little trick I wasn't aware of. 

Here the solution, by the way:

```js
// given an existing svg wrapper, I'm appending two groups
const g1 = svg.appeng('g')
const g2 = svg.append('g')

// the original circle
const circle = g1.append('circle')

// the cloned one using the `clone` function from D3.js
const cloned = circle.clone()

// here the real trick, because just using g2.append(cloned) doesn't work
g2.append(() => circle.node())
```

We need to use a function instead passing the cloned selection. I don't really know why, though.