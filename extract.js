const pos = require('pos')
const enPos = require('en-pos')

const blacklist = [
  'constructor',
  've'
]

export default (pages) => {
  const tagsMap = {}

  // extract noun from posts
  pages.forEach(page => {
    const words = new pos.Lexer().lex(page.text)

    const taggedWords = new pos.Tagger().tag(words)

    // const Tag = enPos.Tag
    // const tagged = new Tag(words).initial().tags
    // const taggedWords = tagged.map((t, i) => {
    //   return [words[i], t]
    // })

    let tags = taggedWords.filter(w => w[1].indexOf('NN') === 0)
    tags = tags.map(d => d[0]) // remove NN def
    tags = tags.map(d => d.replace(/\W/g, '')) // strip non-alphachar
    tags = tags.filter(d => d && d !== '') // skip empty
    tags = tags.map(d => d.toLowerCase()) // lowercase
    tags = [...new Set(tags)] // remove duplicates
    tags = tags.filter(d => blacklist.indexOf(d) === -1) // remove blacklisted
    tags = tags.filter(d => d.length > 1) // remove single letter

    page.genTags = tags

    tags.forEach(t => {
      if (!tagsMap[t]) tagsMap[t] = []
      tagsMap[t].push({ title: page.title, url: page.url })
    })
  })

  let res = []

  let count = 0

  for (const k in tagsMap) {
    if (tagsMap[k].length > 2) {
      if (count < 500) { // increase from time to time
        res.push({
          title: k,
          path: '/tag/' + k,
          slug: '/tag/' + k,
          url: '/tag/' + k + '/',
          children: tagsMap[k]
        })
      }
      count++
    }
  }
  console.log('TAGS COUNT', count, res.length)

  res = res.sort((a, b) => {
    return b.children.length - a.children.length
  })

  return res
}
