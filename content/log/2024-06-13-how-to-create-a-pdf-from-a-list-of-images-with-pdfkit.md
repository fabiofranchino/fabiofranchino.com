---
title: How to create a PDF from a list of images with pdfkit
date: 2024-06-13 19:31:00 +0100
---



If you need to create a PDF multi-page document from a list of images, here the snippet of code using the library PDFKit.

This is the Node.js script:

```js
const PDFDocument = require('pdfkit')

function createPDFWithImages(imageBuffers, size) {
  return new Promise((resolve, reject) => {
      const doc = new PDFDocument({ size })
      let buffers = []

      doc.on('data', buffers.push.bind(buffers))
      doc.on('end', () => {
          const pdfData = Buffer.concat(buffers)
          resolve(pdfData)
      });

      doc.on('error', reject)

      imageBuffers.forEach((imageBuffer, index) => {
          if (index > 0) doc.addPage({ size })
          doc.image(imageBuffer, 0, 0, {
              width: size[0],
              height: size[1]
          })
      })

      doc.end()
  })
}
```

And here how to use that function:

```js
const imageBuffers = [... buffers of image]
const PDFBuffer = await createPDFWithImages(imageBuffers, [500,300])
```

That's it. You then need to use the `fs` package to save the buffer to disk.