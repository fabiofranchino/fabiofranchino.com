---
title: How to get the base domain from a full URL
date: 2024-01-01 09:26:00 +0100
---



To extract the base domain from a full URL in JavaScript, you can create a function that utilizes the URL constructor to parse the full URL, and then access the `hostname` property of the resulting object, which provides the base domain, effectively separating it from other components like the protocol, path, or query parameters.

Here the code:

```js
const getBaseURLOnly = s => {
    let res = s
    try{
        let url = new URL(s)
        res = url.origin
    }catch(e){
				console.log('invalid url', s)
    }
    return res
}
```

