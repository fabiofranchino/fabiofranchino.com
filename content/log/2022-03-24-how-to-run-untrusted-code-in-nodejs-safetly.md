---
title: How to run untrusted code in NodeJs safetly
date: 2022-03-24 11:28:00 +0100
---



This is my first attempt to run untrusted, user provided, code in a Node.js application, (i.e. an Express.js webserver) and getting the result in a sandboxed mode.

I've tried a couple of libraries (`sandbox` and `vm2`) but I cannot achieve what I've needed:

- Run custom code safetly
- Get the result from that code in order to be used within the webserver
- Allows the user to use any compatible npm module

At last, here a working solution using `vm` the Node.js internal module to execute sandboxed code, but the last point is still unsolved:

```js
const vm = require('vm')
const axios = require('axios')

const resolve = (params) => {
    console.log(params)
}

const reject = (params) => {
    console.log('error', params)
}

vm.runInNewContext(`
    ;(async () => {
        try{
            const d = await axios('https://jsonplaceholder.typicode.com/todos/1')
            resolve(d.data)
        }catch(e){
            reject(e)
        }
    })()
    `, {
    axios,
    resolve,
    reject
})
```

A possible solution for the last point is to use `skypack` CDN service but unfortunately Node.js cannot import module from URL, so far.