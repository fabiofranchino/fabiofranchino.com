---
title: Vue PWA exclude some files
date: 2020-11-30 14:56:00 +0100
---



I found out the solution [here](https://www.reddit.com/r/vuejs/comments/dmw6q4/how_do_i_exclude_a_file_from_pwa_config_to_be/) and I'm going to re-post here for convenience:

```js
module.exports = {
  pwa: {
    workboxOptions: {
      exclude: ['file_one.htm', 'file_two.js'],
    }
  }
}
```

