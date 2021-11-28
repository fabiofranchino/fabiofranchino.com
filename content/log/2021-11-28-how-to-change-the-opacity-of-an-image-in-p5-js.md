---
title: How to change the opacity of an image in p5 js
date: 2021-11-28 18:47:00 +0100
---



Suppose this sketch:

```js
var img

function preload(){
  img = loadImage('img.jpg')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('red');
  image(img, 0, 0, width, height)
}
```

It render an image on canvas.

In order to change its opacity, we ca use `tint` this way:

```js
tint(255, alpha)
```

where `alpha` is a value between 0 and 255. So we can make it dynamic this way:

```js
function draw() {
  background('red');
  
  var op = map(mouseX, 0, width, 0, 255)
  tint(255, op)
  image(img, 0, 0, width, height)
}
```

Sketc [here](https://editor.p5js.org/FabioFranchino/sketches/xZHDmbxwN).