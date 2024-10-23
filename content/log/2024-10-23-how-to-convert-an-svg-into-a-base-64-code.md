---
title: How to convert an SVG into a Base 64 code
date: 2024-10-23 18:27:00 +0100
---



To convert an SVG into a Base64 string and use it directly in an HTML `img` tag, here's a concise approach using JavaScript.

### Step 1: Base64 Encoding the SVG

You can take your SVG markup (as a string) and encode it to a Base64 string using the `btoa` function.

```js
const svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="blue" /></svg>';
const base64Svg = 'data:image/svg+xml;base64,' + btoa(svgMarkup);
```

### Step 2: Using Base64 as the Source in an `img` tag

Once you've encoded the SVG, you can use it as the `src` attribute in an `img` element.

```html
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iYmx1ZSIgLz48L3N2Zz4=" />
```

### To sum up

- **SVG as String**: First, you need to have your SVG markup as a string.
- **Base64 Encoding**: Use JavaScript's `btoa()` function to encode the SVG markup.
- **Usage**: Append the encoded string to `data:image/svg+xml;base64,` and use it in your `img` tag as the `src` attribute.

This method allows embedding SVGs directly into HTML without needing external files, ensuring compatibility across different browsers and platforms.