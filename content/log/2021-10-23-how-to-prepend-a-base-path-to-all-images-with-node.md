---
title: How to prepend a base path to all images with Node
date: 2021-10-23 08:50:00 +0100
---

How to prepend a base path to all relative images with Node

To add further optimizations to my blog, I decided to use a CDN to serve optimized images and assets.

This blog uses Nuxt and the `generate` capability to dump all the HTML as static pre-compiled files.

All the assets were served by the Netlify CDN which doesn't allow dynamic resizes and on-the-fly compression. Using something like [CloudImage](https://www.cloudimage.io/) CDN, I potentially can get some benefits from performance perspective.

## The scenario and results

For instance, the full list of images (that are loaded in lazy mode, btw) in the blog index page, without optimization, weights **22Mb** of data. After the CDN swap, the optimized version of the same list weights **8Mb**! Not bad at all, nearly **70%** of reduction of original weight!

## The Plan

Instead of digging with the Nuxt internals and plugin system, I've opted with a little Node.js script that, after the generation process, reads all the source files and prepend the CDN base path to my `img` tags with a tiny RegEx.

Here the script that detects the image `src` and add the CDN base path:

```js
const addCDNBaseToImages = html => {
  const reg = /<img.*?src="([^"]*)"[^>]*>(?:<\/img>)?/gmi
  const images = html.match(reg)
  let parsed = html

  if (!images) return html

  images.forEach(img => {
    const r = /<img.*?src="([^"]*)"[^>]*>(?:<\/img>)?/gmi
    const res = r.exec(img)

    const src = res[1]
    
    if (src.indexOf('data:image') === -1 || src.indexOf('https') === -1) {
      const newTag = res[0].replace(src, BASE_CDN_PATH + src)
      parsed = parsed.replace(res[0], newTag)
    }
  })

  return parsed
}
```

Since there're some `base64` encoded images and absolute URL from other sources, I need to skip them during the process.

I love when a small action produces a consistent impact!