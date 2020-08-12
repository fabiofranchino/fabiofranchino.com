---
title: Open a popup and fullscreen window
date: 2020-08-12 05:28:00 +0100
---



To open a popup window, you need an explicit user action, such as:

```html
<button onclick="openWin()">Open</button>
```

```js
let ref = window.open(`external.html`, 'Screen', `top=0,left=0,width=960,height=560,menubar=no,location=no,resizable=yes,scrollbars=no,status=no`)
ref.focus()
```

To run as fullscreen, within the `external.html` file you can add:

```js
// from MDN
function toggleFullScreen(){
    if (!document.mozFullScreen && !document.webkitFullScreen) {
        if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen()
        } else {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
        }
    } else {
        if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else {
            document.webkitCancelFullScreen()
        }
    }
}

document.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        toggleFullScreen()
    }
})
```

