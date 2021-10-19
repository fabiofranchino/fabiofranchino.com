---
title: Quickest way to escape HTML to String
date: 2021-10-19 11:23:00 +0100
---



Here the code:

```js
const esc = (v) => {
    var escape = document.createElement('textarea')
    escape.textContent = v
    return escape.innerHTML
}
```

Found it [here](https://stackoverflow.com/questions/5499078/fastest-method-to-escape-html-tags-as-html-entities).

