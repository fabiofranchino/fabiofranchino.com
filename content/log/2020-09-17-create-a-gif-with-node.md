---
title: Create a GIF with Node
date: 2020-09-17 12:57:00 +0100
---

.js

Here the snippet of code that creates a GIF animation using a list of pictures using a combination of [GifEncoder](https://github.com/eugeneware/gifencoder) and [Node-Canvas](https://github.com/Automattic/node-canvas) as well.

```js
const GIFEncoder = require('gifencoder')

const width = 900
const height = 600

const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(width, height)
const ctx = canvas.getContext('2d')

const encoder = new GIFEncoder(width, height)
encoder.createReadStream().pipe(fs.createWriteStream('animated.gif'))
encoder.start()
encoder.setRepeat(0)
encoder.setDelay(500)
encoder.setQuality(10)

const list = fs.readdirSync('images/')
list.forEach(async (f, i) => {
    const image = await loadImage('images/' + f)
    ctx.drawImage(image, 0, 0)
    encoder.addFrame(ctx)

    if (i === list.length - 1) {
      encoder.finish()
    }
})

```

I've tried first using `fs` module to load the images but ended up with a lot of issues trying to convert the buffer to something GifEncoder likes, thus, I've used the `loadImage` method from `node-canvas` package.

Have fun!