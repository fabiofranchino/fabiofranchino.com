---
title: Electron process in Vue
date: 2020-12-18 07:42:00 +0100
---

.js CLI version

If you want to use the `process` of Electron from within a Vue.js project, there's a little conflict because webpack inject its own `process` object.

You can use both in this way:

```js
export default{
  mounted(){
    console.log(window.process) // electron process
    console.log(process) // webpack process
  }
}
```

