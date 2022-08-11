---
title: Set the stroke size fixed in svg
date: 2022-08-11 12:47:00 +0100
---



TIL this little attribute to keep the stroke size or width fixed no matter the scale factor an SVG element can have:

```html
<svg viewBox="0 0 100 100">
  <g transform="scale(10)">
    <rect vector-effect="non-scaling-stroke" x="0" y="0" width="100" height="100" fill="none" stroke="#88CE02" stroke-width="2"/>
  </g>
</svg>
```

The magic here is the `vector-effect="non-scaling-stroke"` that keeps in this case the stroke size to 2px even though the group that contains this rect is scaled by 10.

This attribute can affect other visual aspect, [here the reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect).

