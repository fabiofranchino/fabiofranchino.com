---
title: Using DOMParser to create HTML and SVG fragment
date: 2020-10-28 10:50:00 +0100
---

s

If you need to create HTML or SVG fragments in javascript, there's a well supported interface that converts string into regular nodes.

### HTML element

So, instead using `createElement` API that is a little verbose:

```js
const div = document.createElement('div')
div.classList.add('wrapper')

const p = document.createElement('p')
p.innerText = 'Hello!'

div.appendChild(p)

document.body.appendChild(div)
```

You can do the same using [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) this way:

```js
const parser = new DOMParser()

const str = `<div class="wrapper">
	<p>Hello parser!</p>
</div>`

const frag = parser.parseFromString(str, 'text/html').body.childNodes[0]
document.body.append(frag)
```

### SVG element

If you need to create an SVG on the fly, the old API requires specific methods:

```js
const xmlns = "http://www.w3.org/2000/svg"

const svg = document.createElementNS(xmlns, 'svg')
svg.setAttributeNS(null, 'viewBox', '0 0 100 100')
svg.classList.add('wrapper')

const rect = document.createElementNS(xmlns, 'rect')
rect.setAttributeNS(null, 'width', '50')
rect.setAttributeNS(null, 'height', '50')

svg.appendChild(rect)

document.body.appendChild(svg)
```

Here the equivalent version with [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser):

```js
const parser = new DOMParser()

const str = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	<rect width="50" height="50"></rect>
</svg>`

const frag = parser.parseFromString(str, 'text/html').body.childNodes[0]
document.body.append(frag)
```

In general, much cleaner and generic as well as less verbose!