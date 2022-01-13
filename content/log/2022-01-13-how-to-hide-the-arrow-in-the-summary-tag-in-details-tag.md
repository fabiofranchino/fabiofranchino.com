---
title: How to hide the arrow in the summary tag in details tag
date: 2022-01-13 12:59:00 +0100
---



So you have this markup:

```html
<details>
    <summary>Title</summary>
    <p>Text .... </p>
</details>
```

and here the CSS to hide the default arrow in the summary tag:

```css
details > summary {
  list-style: none;
}

details summary::-webkit-details-marker {
  display:none;
}
```

