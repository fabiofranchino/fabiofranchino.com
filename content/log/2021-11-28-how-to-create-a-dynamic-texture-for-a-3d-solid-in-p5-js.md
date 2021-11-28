---
title: How to create a dynamic texture for a 3d solid in p5 js
date: 2021-11-28 11:48:00 +0100
---



Here a little tut about making a dynamic off-screen image canvas that can be used as a texture for a 3D solid in P5.js.

First, let's create the off-screen canvas:

```js
var cnv

function setup(){
  createCanvas(400, 400, WEBGL)
  cnv = createGraphics(400, 400)
}
```

Then, draw something on it:

```js
function draw(){
  cnv.fill(255)
  cnv.noStroke()
  cnv.circle(random(width), random(height), 5)
}
```

Finally, add the code to use it as texture for a 3D solid:

```js
background(0)
rotateY(frameCount * 0.003)
texture(cnv)
sphere(width / 4)
```

Final code with off-screen reset:

```js
var cnv

function setup(){
  createCanvas(400, 400, WEBGL)
  cnv = createGraphics(400, 400)
  cnv.background(0)
  noStroke()
}

function draw(){
  cnv.fill(255)
  cnv.noStroke()
  cnv.circle(random(width), random(height), 5)
  
  background(0)
  rotateY(frameCount * 0.003)
  texture(cnv)
  sphere(width / 4)
}

function mousePressed(){
  cnv.background(0)
}
```

Sketch [here](https://editor.p5js.org/FabioFranchino/sketches/6HxatslZm)