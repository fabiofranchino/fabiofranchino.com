const fs = require('fs')
const slugify = require('slugify')
const moment = require('moment')
const path = require('path')

const logs = fs.readdirSync('./pub')
const newfiles = logs.filter(f => {
  // no start with date and no start with .
  return !f.match(/\d\d\d\d-\d\d-\d\d/) && !f.match(/^[\.]/)
})

newfiles.forEach(f => {
  let src = fs.readFileSync(`./pub/${f}`, 'utf8')
  const rawtitle = f.split('.')[0]
  const title = rawtitle
  const filename = slugify(title).toLowerCase()

  src = src.replace('# ', '').replace(title, '')

  let re = /!\[(.*)\]\((.*)\)/gim
  let mtc = src.match(re)

  if (mtc) {
    mtc.forEach(d => {
      re = /!\[(.*)\]\((.*)\)/gim
      const rex = re.exec(d)
      const r = parseInt(Math.random() * 1000)
      const absPath = path.resolve('pub', rex[2])

      const assetName = slugify(`n${r}_` + path.basename(absPath)).toLowerCase()

      const newpath = `./static/assets/log/${assetName}`
      fs.renameSync(absPath, newpath)

      const newtag = `![](/assets/log/${assetName})`
      src = src.replace(rex[0], newtag)
    })
  }

  re = /<video src="(.*)"><\/video>/gim
  mtc = src.match(re)
  if (mtc) {
    mtc.forEach(d => {
      const rex = re.exec(d)

      const r = parseInt(Math.random() * 1000)
      const absPath = path.resolve('pub', rex[1])

      const assetName = slugify(`n${r}_` + path.basename(absPath)).toLowerCase()

      const newpath = `./static/assets/log/${assetName}`
      fs.renameSync(absPath, newpath)

      src = src.replace(rex[0], `<video autoplay muted loop src="/assets/log/${assetName}"></video>`)
    })
  }

  const today = moment().subtract(4, 'hours')

  const frontmatter = `---
title: ${title}
date: ${today.format('YYYY-MM-DD HH:mm:00 +0100')}
---

`
  const dest = frontmatter + src
  const finalname = `${today.format('YYYY-MM-DD')}-${filename}.md`
  fs.writeFileSync(`./content/log/${finalname}`, dest)
  fs.unlinkSync(`./pub/${f}`)
})
