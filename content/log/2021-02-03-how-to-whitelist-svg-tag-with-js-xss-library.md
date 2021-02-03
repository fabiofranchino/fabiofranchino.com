---
title: How to whitelist SVG tag with js-xss library
date: 2021-02-03 08:33:00 +0100
---



[Js-xss library](https://github.com/leizongmin/js-xss/issues/118#issuecomment-352865144) is a very good piece of software to filter-out unwanted user-provided HTML tags in your application.

It comes with a pre-defined default set of blacklisted tags and attributes out of the box.

## Problem

In my case, I wanted to allow the user writing raw SVG, and its inner tags as well, with all the available attributes.

Whitelisting all the SVG specification in js-xss is quite pedantic if using its default object:

```js
import xss from 'xss'

// allow the `iframe` tag with only the attribute `src`
xss.whiteList.iframe = ['src']
```

If I had want to allow the SVG I'd do something like:

```js
xss.whiteList.circle = ['r', 'cx', 'cy', 'fill', 'stroke']
xss.whiteList.rect = ['width', 'height', 'x', 'y', 'fill', 'stroke']
...
```

... not very comfortable.

## Let's use onIgnoreTagAttr

Here the way to configure it properly to allow the SVG compatible tags and all the possible atributes:

```js
import xss from 'xss'

const whiteListAttrForTags = ['svg', 'circle', 'rect', 'polygon', 'path', ...]

let sanitize = new xss.FilterXSS({
    onIgnoreTagAttr: function (tag, name, value, isWhiteAttr) {
        if(whiteListAttrForTags.indexOf(tag) >= 0 && value){
            return `${name}="${value}"`
        }
    }
})
```

The above configuration still takes into account the tags whitelisted in the `whiteListAttrForTags` array allowing any attribute written within.