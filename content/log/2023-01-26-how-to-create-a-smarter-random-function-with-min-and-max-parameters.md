---
title: How to create a smarter random function with min and max parameters
date: 2023-01-26 08:12:00 +0100
---



Here my take on creating a random function that accepts one or two arguments, the max and the optional min value for a range where the random generator should compute:

```js
const random = (_min, _max) => {

    let min = _max ? _min : 0
    let max = _max ? _max : _min

    let v = Math.random() * (max-min) + min

    return v
}
```

For fun, I've asked the same question to chatGPT, with the prompt "write a javascript random function that accepts one or two arguments, when two, they will be used as min max range", and this is its answer:

```js
function random(min, max) {
  if (arguments.length === 2) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.random();
  }
}
```

