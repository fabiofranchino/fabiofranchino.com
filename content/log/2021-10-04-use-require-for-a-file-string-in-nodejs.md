---
title: Use Require for a File String in Nodejs
date: 2021-10-04 12:26:00 +0100
---



Usually to include a file source in Node.js there's the `fs` module to work with the file-system:

```js
const fs = require('fs')

const src = fs.readFileSync('./myFile.html', 'utf-8')
```

But, there in some situations, such as in ephemeral file-system in serverless stack, `fs` might create some trouble.

An alternative is to `require` the resource in the same way you do with .js and .json files.

Here a possible solution for string-based files, such as .html files:

```js
const src = require('./myFile.html.js')
```

where 'myFile.html.js' is the html source compiled this way at pre-build time:

```js
const fs = require('fs')
const html = fs.readFileSync('./myFile.html', 'utf-8')

const srcjs = JSON.stringify({html})
const html = fs.writeFileSync('./myFile.html.js', srcjs, 'utf-8')
```

This way you can include the string source and use this way:

```js
const src = require('./myFile.html.js')
console.log(src.html) // the html file source
```



