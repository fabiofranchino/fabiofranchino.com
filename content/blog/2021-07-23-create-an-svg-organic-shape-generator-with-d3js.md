---
title: Create an SVG organic shape generator with D3.js.md
date: 2021-07-23 07:00:00 +0100
subtitle: 23th July, 2021
style: blue
cover: cover.gif
categories: Tutorials
tags: [tutorial, svg, organic, shape]
---

There are tons of organic shape generators out there, some of them even charge money to download the shape.

I thought it might be nice to write a little tutorial on how to build your own generator with few lines of code.

![](/assets/posts/create-an-svg-organic-shape-generator-with-d3js/cover.gif)

Here the walk-through:

## The SVG part

We use an SVG to hold the path we want to generate, thus, in the HTML let's put an SVG tag:

```html
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" 
     viewBox="0 0 500 500"></svg>
```

I've included also the `xmlns` attributes in order to be able to download the SVG as valid file.

## The JS (and D3.js) part

Let's follow along the lines the relevan parts:

Define some variables we can tweak in order to get different results:

```js
let n = 5 // number of points
let f = 0.1 // level of randomness
let color = '#978af2' // fill color
```

Then, we prepare some D3.js specific helpers to make the calculation for us:

```js
const mapX = d3.scaleLinear()
    .domain([-1, 1])
    .range([100, 400])

const mapY = d3.scaleLinear()
    .domain([-1, 1])
    .range([100, 400])
```

Now, time to create some elements in our document, with some D3.js methods:

```js
const svg = d3.select('svg') // our container

const path = d3.line()
    .x(d => mapX(d.x))
    .y(d => mapY(d.y))
    .curve(d3.curveBasisClosed) // this smooth the path

const thePath = svg.append('path')
```

The final part is the `draw` function where all the magic happens on every run and where D3.js shines. We create a little dataset, a list of points using a bit of trigonometry.

```js
const draw = () => {
  
  // this is the core part, we create a dataset of points
  const data = d3.range(n).map((d,i) => {
      const w = Math.PI * 2 / n
      const a = w * i 
      const x = Math.cos(a) + (Math.random()*f - (f/2))
      const y = Math.sin(a) + (Math.random()*f - (f/2))
      return {x, y}
  })
  
  // update the path
  thePath.transition()
    .attr('d', path(data))
    .style('fill', color)
}
```

The last chunk is just the function call:

```js
draw()
```

You can see the same code in this [Codepen](https://codepen.io/abusedmedia/pen/OJmOWRe?editors=0010) or play with a enhanced version with some UI elements [here](https://codepen.io/abusedmedia/pen/KKmXGVY?editors=1010).

**PS: if you're going to create a service that generate an organic shape out of this tutorial, please credit it where is due :)**