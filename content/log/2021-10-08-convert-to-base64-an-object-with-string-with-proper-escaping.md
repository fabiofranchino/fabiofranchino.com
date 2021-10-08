---
title: Convert to base64 an object with string with proper escaping
date: 2021-10-08 13:58:00 +0100
---



Let's suppose I have this object:

```js
const json = {a: true, b: 1, c: 'Some string with <b>HTML</b> and👻'}
```

And I'd like to safetly pass without break it.

So, I'm convert  it as string:

```js
const str = JSON.stringify(json)
```

And escaping it:

```js
const esc = unescape(encodeURIComponent(str))
```

And convert it as Base64:

```js
const base = btoa(esc)
```

Here the back conversion that works as expected:

```js
decodeURIComponent(escape(atob(base)))
```

