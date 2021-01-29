---
title: Use GreenSock in P5.js editor
date: 2021-01-30 07:00:00 +0100
subtitle: 30th January, 2021
style: blue
cover: cover.png
categories: Tutorials
tags: [tutorial, p5, gsap, integration]
---

[P5.js](https://p5js.org/) is a great library to create dynamic and interactive sketches.

It's often used by creative people who knows how to code (creative coders) and by a lot of creatives in general that want to approach coding matter.

Indeed, P5.js (and [Processing](http://processing.org/)) has been always the perfect tool to start learning coding.

What is a little bit more challenging in p5.js is making animations, if compared with what some popular javascript libraries can do with very few lines of codes, such as [GreenSock](https://greensock.com/gsap/) (also known as GSAP).

I wanted to investigate on possible outcomes by integrating P5.js with GSAP and keeping the barrier the lowest as possible for newbies and primers.

## The setup

I'm using the P5.js online editor because it's the fastest setup we can imagine, just head to its [URL](https://editor.p5js.org/), create and account, and you're ready to code.

The only extra step we need to do is to include the GSAP library within the scketch.

Add the following code within the `head` in the `index.html` file:

```html
<script src="https://unpkg.com/gsap"></script>
```

## P5 context

P5.js draws shapes and elements on a `canvas` by means of sequential drawing calls. This means that all the shapes, elements and their properties, once drawn, are not available anymore and a new frame needs to be re-drawn from scratch.

GSAP (and other similar libraries), instead, animates existing properties over time, meaning that those properties need to be available across several frames.

## Proxy variables

In order to make GSAP useful in P5.js context, we need some properties that act as proxy:

```javascript
var x = 0
var y = 0

function draw(){
  circle(x, y, 50)
}

function mouseClicked(){
  gsap.to(this, {x:100, y:100})
}
```

In this case we pass `this` to GSAP because `x` and `y` are public property of the P5 context.

Click to interact ([source](https://editor.p5js.org/FabioFranchino/sketches/ECgUzd3Z_)):

<iframe width="100%" height="300" src="https://editor.p5js.org/FabioFranchino/embed/ECgUzd3Z_"></iframe>

This works but for each element we want to draw, we need, at least, a pair of variables. This is not going to scale.

Let's try to abstract the elements we want to animate with GSAP:

```js
var elements = []

function setup() {
  createCanvas(400, 400);
  for(var i=0; i<50; i++){
    elements.push({
      x: width/2,
      y: height/2,
      r: 2
    })
  }
}
```

and in the draw function we can put simply this:

```js
function draw(){
  background(255)
  elements.forEach(el => {
    circle(el.x, el.y, el.r)
  })
}
```

Now we need the trigger to start the GSAP animations:

```js
function mouseClicked(){
  gsap.to(elements, {
    x:() => random(width), 
    y:() => random(height), 
    r:() => random(40), 
    stagger:0.1})
}
```

Click to interact ([source](https://editor.p5js.org/FabioFranchino/sketches/bECKaUO6f)):

<iframe width="100%" height="300" src="https://editor.p5js.org/FabioFranchino/embed/bECKaUO6f"></iframe>

Of course, everything that is a number can be animated with GSAP:

Click to interact ([source](https://editor.p5js.org/FabioFranchino/sketches/nZGiDq5tW)):

<iframe width="100%" height="300" src="https://editor.p5js.org/FabioFranchino/embed/nZGiDq5tW"></iframe>

So far, so good. Happy exploration!







