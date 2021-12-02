---
title: Finding in string portions of letters with RegEx and JS
date: 2021-12-02 04:59:00 +0100
---



Here a simple way to check if a particular chunk of text is present or not in a given string:

```js
// my string
const myText = 'Hello there! How is going?'

// check if 'are' or 'is' presence in string
const check = myText.match(/are|is/mig)

// 'check' will be = null if not present
// 'check' will be = ['is'] if it finds something
```

So, you can replace what you found with something else, in this case, just strip them out:

```js
var res = myText

check.forEach(s => {
  res = res.replace(s, '')
})
```

