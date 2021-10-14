---
title: Pass a Json object as URL parameter
date: 2021-10-14 04:25:00 +0100
---



When you need to pass a more structured set of parameters through URL, here the way to go:

```js
const myObject = {title: 'Some Title', public: true, id: 100}

const obStr = JSON.stringify(myObject)

const param = btoa(obStr)
```

Then, when you get the param from URL, you can decode this way:

```js
// domain.com/?p=ahgdgf6hhbfdf...

const param = location.search.split('?p=')[1]
let myObject = null
try {
  const obStr = atob(param)
  myObject = JSON.parse(obStr)
} catch (e) {
  return err('Something wrong')
}

console.log(myObject)
```

