---
title: Save and store emoji into a database table
date: 2021-10-08 13:58:00 +0100
---



If you need to save emojis into a database table without break it, you have a couple of possibilities:

You can strip all the way the emoji present in a string:

```js
const stripEmoji = require('emoji-strip')

const emoji = 'thumbs-up👍 for staying strong💪 without emoji please🙏'

stripEmoji(emoji) // "thumbs-up for staying strong without emoji please"
```

Or you can convert them in ascii string and re-convert back when you retrieve the record:

```js
const nodeEmoji = require('node-emoji')

const emoji = 'thumbs-up👍 for staying strong💪 without emoji please🙏'

const clean = nodeEmoji.unemojify(emoji) 
// "thumbs-up:thumbsup: for staying strong:muscle: without emoji please:pray:"

const revert = nodeEmoji.emojify(clean)
//"thumbs-up👍 for staying strong💪 without emoji please🙏"
```



