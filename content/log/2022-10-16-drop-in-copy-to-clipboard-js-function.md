---
title: Drop in Copy to Clipboard js function
date: 2022-10-16 07:42:00 +0100
---



I use it from time to time, therefore, here the snippet in ES6 that can be used in this way:

```js
import copy from './copyClipboard.js'

copy('my text that need to be copied')
```

Here the module:

```js
function fallbackCopyTextToClipboard (text) {
    const textArea = document.createElement('textarea')
    textArea.value = text
  
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'
  
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
  
    try {
      const successful = document.execCommand('copy')
      const msg = successful ? 'successful' : 'unsuccessful'
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err)
    }
  
    document.body.removeChild(textArea)
  }
  
  export default fallbackCopyTextToClipboard
```

