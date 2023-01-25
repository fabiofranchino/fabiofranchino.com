---
title: Detect selection direction in javascript
date: 2023-01-25 04:58:00 +0100
---



If you work with the selection in editable text elements and needs to detect the direction the user is selecting text, i.e. from right to left and vice-versa, here the snippet, found [here](https://stackoverflow.com/a/23512678):

```js
var sel = getSelection(),
position = sel.anchorNode.compareDocumentPosition(sel.focusNode),
backward = false;
// position == 0 if nodes are the same
if (!position && sel.anchorOffset > sel.focusOffset || 
  position === Node.DOCUMENT_POSITION_PRECEDING)
  backward = true;
```

