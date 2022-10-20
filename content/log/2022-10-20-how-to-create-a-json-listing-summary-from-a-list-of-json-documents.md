---
title: How to create a JSON listing summary from a list of JSON documents
date: 2022-10-20 04:29:00 +0100
---

 with Node.js

I wrote this Node.js script to create a JSON listing file with some information out of a list of JSON files:

```js
const fs = require('fs')

const folder = 'myFolder'

const list = fs.readdirSync(folder)
const src = []

list.forEach(f => {
    const file = fs.readFileSync(folder + '/' + f, 'utf-8')
    try{
        const json = JSON.parse(file)
        const {filename, created_at}
        src.push({filename, created_at})
    }catch(e){
        console.log(e)
    }
    
})

fs.writeFileSync('list.json', JSON.stringify(src), 'utf-8')
```

