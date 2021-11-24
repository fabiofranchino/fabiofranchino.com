---
title: I brutally eradicated js from my blog for fun and profit
date: 2021-10-25 07:00:00 +0100
subtitle: 25th October, 2021
style: red
cover: cover.png
categories: Opinions
tags: [opinion, general, thoughts]
---

This blog is built with Nuxt.js.

Nuxt is awesome from **development** perspective and it's great for **SEO** too, since it generates all the pages statically to make crawlers happy.

**But**, Google PageSpeed is not really happy with it:

![](/assets/blog/I-brutally-eradicated-js-from-my-blog-for-fun-and-profit/old-list.png)

The above is the blog list page and below is an article:

![](/assets/blog/I-brutally-eradicated-js-from-my-blog-for-fun-and-profit/old-page.png)

It turns out that Google PageSpeed doesn't like many little JS includes, that are meant to hydrating the blog for a better user navigation and experience.

I wanted to test a version without javascript at all, quickly.

## The test

Instead of digging with the Nuxt internals, plugin system or some unknown builder setting, I've opted for **the brutal way**:

> A Node.js script that parses all the generated pages, finding all the script tags, stripping 'em all!

And here the result of the same pages from Google PageSpeed:

![](/assets/blog/I-brutally-eradicated-js-from-my-blog-for-fun-and-profit/new-list.png)

and

![](/assets/blog/I-brutally-eradicated-js-from-my-blog-for-fun-and-profit/new-page.png)

> **Not bad at all!**

Here the relevant part of the Node.js script for the curious:

```js
const fs = require('fs')

const files = getAllFiles('./dist')

files.forEach(file => {
  let f = fs.readFileSync(file, 'utf-8')
  f = f.replace(/<script.*?<\/script>/mig, '')
  f = f.replace(/<link rel="preload" href=.*?as="script">/mig, '')
  fs.writeFileSync(file, f, 'utf-8')
})
```

