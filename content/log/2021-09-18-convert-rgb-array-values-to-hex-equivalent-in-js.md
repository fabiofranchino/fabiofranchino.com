---
title: Convert RGB array values to Hex equivalent in JS
date: 2021-09-18 10:28:00 +0100
---



In case you have an array of RGB values, such as:

```js
var arr = [120, 0, 200]
```

and want to get the hexadecimal value of the same color:

```js
var color = '#a4b809'
```

Here the snippet I use and put here for my personal reference:

```js
const rgb2hex = arr => {
    const rs = arr.map(x => {
        const y = parseInt(x).toString(16)
        return y.length === 1 ? '0'+y : y
    })
    return '#' + rs.join('')
}

// rgb2hex([120, 0, 200]) // #7800c8
```

