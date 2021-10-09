const readingTime = require('reading-time')
const frontMatter = require('frontmatter')
const fs = require('fs')

let totalWords = 0

const dir1 = fs.readdirSync('content/blog')
const blog = dir1.filter(d => d.indexOf('md') >= 0)
blog.forEach(d => {
  const src = fs.readFileSync('content/blog/' + d, 'utf-8')
  const t = frontMatter(src)
  const words = readingTime(t.content)
  totalWords += words.words
})

const dir2 = fs.readdirSync('content/log')
const log = dir2.filter(d => d.indexOf('md') >= 0)

const ob = {
  blog: blog.length,
  log: log.length,
  words: totalWords
}

fs.writeFileSync('components/global/stats.json', JSON.stringify(ob))
