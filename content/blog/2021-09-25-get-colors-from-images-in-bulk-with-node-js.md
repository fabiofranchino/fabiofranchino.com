---
title: Get colors from images in bulk with Node.js
date: 2021-09-25 07:00:00 +0100
subtitle: 25th September, 2021
style: blue
categories: Tutorials
tags: [tutorial, colors, extract, nodejs, thief]
---

Today I need to extract the main or **dominant colors** from a bunch of images, thus, I created a script in Node.js to do that.

The process I encoded in order to use the script is something like:

- paste a list of image URLs in a txt file (that I grab from a spreadsheet)
- run the script
- get a list (in a .csv file) of the extracted colors in order to paste them on the original spreadsheet

The process might look rough but it works well and with a simple manual copy/paste I can easily decorate a spreadsheet with additional info that otherwise would be hard to integrate automatically.

## The script

The Node.js script is quite simple because it uses a specific library for the color extraction task, which is `colorthief`.

Let's prepare the input values:

```js
const fs = require('fs')
const source = fs.readFileSync('./source.csv', 'utf-8')
const list = source.split('\n')
```

Next, I created a Promise based function to process in sequence all the images:

```js
const process = (url) => {
    return new Promise((resolve, reject) => {
        const f = async () => {
            const dominant = await ColorThief.getColor(url)
            const palette = await ColorThief.getPalette(url, 5)
            resolve({dominant, palette})
        }
        f()
    })
}
```

The above function uses **ColorThief** to both extract the single dominant color and the main palette as well.

I've wrapped all the required promises in an array:

```js
const allProms = list.map(url => process(url))
```

Now the main function in async mode in order to use the great `await Promise.all()` command:

```js
;(async () => {
    const all = await Promise.all(allProms)

    let csv = 'dominant,palette1,palette2,palette3,palette4,palette5\n'

    all.forEach(pict => {
        csv += rgb2hex(pict.dominant) + ','
        pict.palette.forEach(p => {
            csv += rgb2hex(p) + ','
        })
        csv += '\n'
    })

    fs.writeFileSync('./destination.csv', csv, 'utf-8')
})()
```

The above function also create the final csv file, saving it in the file system.

You should see also that there's a function to convert RGB value (this is the way ColorThief return the color value) to Hex value. You can skip it if RGB values are ok for you.

```js
const rgb2hex = arr => {
    const rs = arr.map(x => {
        const y = parseInt(x).toString(16)
        return y.length === 1 ? '0'+y : y
    })
    return '#' + rs.join('')
}
```

After run the script, you just need to open the `destination.csv` to get the extracted values, each row related to each source image.