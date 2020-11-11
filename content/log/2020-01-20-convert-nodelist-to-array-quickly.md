---
title: Convert NodeList to Array quickly
date: 2020-01-20 08:53:00 +0100
subtitle: 20th January, 2020
categories: Logs
tags: [log]
---

Convert NodeList to Array quickly

Found [here](https://davidwalsh.name/nodelist-array) and repost in this blog for easier reminder to myself.

```javascript
var array = [].slice.call(document.querySelectorAll("div"))
```

This comes in handy from time to time.

### Update

There's a more natural and easier-to-remember way to do the same task:

```javascript
var array = Array.from(document.querySelectorAll("div"))
```