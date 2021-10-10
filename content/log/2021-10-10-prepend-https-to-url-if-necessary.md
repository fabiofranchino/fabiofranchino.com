---
title: Prepend https to URL if necessary
date: 2021-10-10 16:15:00 +0100
---



This javascript function prepends the `https://` chunk to a provided URL only if missing:

```js
var prependHTTP =  url => {
  url = decodeURIComponent(url)
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    url = 'https://' + url
  }
  return url
}
```

This way, we can be sure that the final URL contains the `https` protocol:

```js
prependHTTP('https://www.google.com') //'https://www.google.com'
prependHTTP('www.google.com') //'https://www.google.com'
```

