---
title: How to use Gsap with DOM element of P5js
date: 2021-11-14 16:23:00 +0100
---



If you need to integrate GSAP with P5.js, [I've already written something](/blog/use-greensock-in-p5-js-editor/) about it.

If you need to trigger a GSAP animation using P5.js DOM elements, you need to workaround a bit to make it to work properly.

For instance, this simple script, that triggers a GSAP animation from a DOM P5.js element, doesn't work:

```js
var x = 0
var y = 0
var btn

function setup(){
	btn = createButton('click')
	btn.mousePressed(animate)
}

function draw(){
  circle(x, y, 50)
}

function animate(){
  gsap.to(this, {x:100, y:100})
}
```

The reason is that the `this` variable has a different context when called using a DOM element.

To workaround it, just keep the `this` context of the sketch in a custom variable, such as:

```js
/* ... */
var sketch = this

/* ... */

function animate(){
  gsap.to(sketch, {x:100, y:100})
}
```

Now you can create your UI element that can drive any GSAP animations without issues.