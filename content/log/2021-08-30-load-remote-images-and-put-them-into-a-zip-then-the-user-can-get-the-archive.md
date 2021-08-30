---
title: Load remote images and put them into a zip then the user can get the archive
date: 2021-08-30 19:26:00 +0100
---



I've spend a reasonable hour to crack this, apparently, simple task.

I wanted to download a bunch of images from the network using `axios` in Node.js in an Express.js app, to put those images into a zip file in order to let the user download it right away.

Sounds simple right? Well, after a good number of attempts, here mysolution:

## The journey

Let's load a bunch of images using `axios`

```js
const axios = require('axios')
const proms = []

for (const i = 0; i < urls.length; i++) {
  proms.push(axios(urls[i], { responseType: 'arraybuffer' }))
}

const images = await Promise.all(proms)
```

Here we have a key part to pay attention: `arraybuffer` and not `blob` since we are in Node.js.

Then, let's prepare the zip file using `jszip`:

```js
const JSZip = require('jszip')
const zip = new JSZip()
const fold = zip.folder('images')

images.forEach((d, i) => {
	fold.file(`img${i}.jpg`, d.data, { binary: true })
})
```

Here another important part. We can use the Blob data (that is an ArrayBuffer) directly by setting the option `binary:true`.

Finally, let's close the zip file:

```js
const fzip = await zip.generateAsync({ type: 'nodebuffer' })
```

Since we are in Node.js, JSZip has a specific encoding, `nodebuffer`.

Last bit, let's send the file buffer to the user:

```js
res.setHeader('Content-Disposition', `attachment; filename="archive.zip"`)
res.setHeader('Content-Type', 'application/zip')
res.send(fzip)
```

Since we are in Node.js, this example uses Express.js.

Kudos to [this article](https://www.py4u.net/discuss/298590) that allowed me to understand the issues I was facing because:

> There is natively no Blob object in node.js, so it makes sense axios didn't monkey-patch it just so they can return a response no-one else would be able to consume anyway.
>
> From a browser, you'd have exactly the same responses:

