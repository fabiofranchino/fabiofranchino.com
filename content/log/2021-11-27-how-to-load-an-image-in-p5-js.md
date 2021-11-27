---
title: How to load an image in P5 js
date: 2021-11-27 06:58:00 +0100
---



Here the code to load and show an image in P5.js.

To the default starter sketch, let's add the code to preload the file:

```js
var img

function preload(){
  img = loadImage('myImage.jpg')
}
```

An image URL can be remote or local to the sketch.

Then, let's draw the loaded image in the `draw` function:

```js
function draw() {
  background(220)
  image(img, 20, 20)
}
```

We need to add the `x` and `y` parameters, optionally the `width` and `height` as well:

```js
function draw() {
  background(220);
  image(img, 20, 20, 100, 100)
}
```

[Here](https://editor.p5js.org/FabioFranchino/sketches/dLjTvlVTC) the example.