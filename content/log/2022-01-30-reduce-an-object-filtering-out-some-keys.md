---
title: Reduce an object filtering out some keys
date: 2022-01-30 08:39:00 +0100
---



Here an handy javascript snippet to reduce an object that contains many keys to one with fewer keys:

```js
const myObject = {a:1, b:2, c:3, d:4, e:5}

const reduced = ob => {
    const allowed = ['a', 'b']
    return Object.keys(ob)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = ob[key]
        return obj
      }, {})
}

const reducedObject = reduced(myObject) // {a:1, b:2}
```

