const fs = require('fs')
const frontmatter = require('@github-docs/frontmatter')
const d3 = require('d3')

module.exports = (routes) => {
  const arr = []

  routes.forEach(d => {
    const markdown = fs.readFileSync('content' + d.url + '.md')
    const doc = frontmatter(markdown)

    const cloned = JSON.parse(JSON.stringify(d))

    cloned.front = doc.data

    arr.push(cloned)
  })

  arr.sort((a, b) => {
    return d3.descending(a.date, b.date)
  })

  return arr
}
