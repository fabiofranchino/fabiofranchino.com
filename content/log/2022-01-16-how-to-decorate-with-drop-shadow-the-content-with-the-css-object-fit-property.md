---
title: How to decorate with drop-shadow the content with the css object-fit property
date: 2022-01-16 09:41:00 +0100
---



This struggled to me for a while.

I've found a very nice [article](https://fvsch.com/object-fit-decoration) that shows a neat workaround:

```css
img {
  filter: drop-shadow(0px 0px 1px rgba(0,0,0,.5))
          drop-shadow(0px 0px 10px rgba(0,0,0,.3));
}
```

There are some limitations though but it's better than nothing!