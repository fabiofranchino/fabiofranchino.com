---
title: How to read a folder of markdown and convert them as JSON list
date: 2023-01-13 04:39:00 +0100
---



This is a neat Node.js javascript code that reads a folder full of markdown files and return a JSON file with an array representing that folder.

First, we need some packages: `glob` and `@github-docs/frontmatter`.

Here the script with comments along the lines:

```js
import glob from 'glob'
import frontmatter from '`@github-docs/frontmatter'

const files = glob.sync('**/*.md', { cwd: 'myfolder' })

const list = files.map(d => {
  const md = fs.readFileSync(d)
  return frontmatter(md)
})

fs.writeFileSync('output/list.json', JSON.stringify(list))
```



