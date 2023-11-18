---
title: How to render a dynamic title in pages generated from data in 11ty
date: 2023-11-18 19:33:00 +0100
---



This is the way to render the page title when you're creating pages dynamically using data.

The variable you'd use in the template is not accessible for the title property.

So this is the trick:

```html
---
pagination:
  data: posts
  size: 1
  alias: post
permalink: "posts/{{ post.slug }}/"
eleventyComputed:
  title: "{{ post.title }}"
---

<h1>
  {{ post.title }}
</h1>
```

