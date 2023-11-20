---
title: How to override fetch in javascript to intercept it
date: 2023-11-20 03:31:00 +0100
---



This is an handy script to override `fetch` and perform some manipulation before the network request starts:

```js
const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
    let [resource, config ] = args;

    if(resource == '/some/route') resource = 'https://www.othercontent.com';

    const response = await originalFetch(resource, config);

    return response
}
```

The above code is not very useful if you have full control of the server, thus, it is when you need to manipulate a website you don't control at server level, (hint: scraping).