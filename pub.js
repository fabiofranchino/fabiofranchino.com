const fs = require('fs')
var slugify = require('slugify')
var moment = require('moment')
var path = require('path')

var logs = fs.readdirSync('./pub')
var newfiles = logs.filter(f => {
  // no start with date and no start with .
  return !f.match(/\d\d\d\d-\d\d-\d\d/) && !f.match(/^[\.]/)
})

newfiles.forEach(f => {
  var src = fs.readFileSync(`./pub/${f}`, 'utf8')
  var rawtitle = f.split('.')[0]
  var title = rawtitle
  var filename = slugify(title).toLowerCase()

  src = src.replace(title, '')

  var re = /!\[(.*)\]\((.*)\)/gim
  var mtc = src.match(re)

  if (mtc) {
    mtc.forEach(d => {
      re = /!\[(.*)\]\((.*)\)/gim
      var rex = re.exec(d)
      var r = parseInt(Math.random() * 1000)
      var absPath = path.resolve('pub', rex[2])

      var assetName = slugify(`n${r}_` + path.basename(absPath)).toLowerCase()

      var newpath = `./static/assets/log/${assetName}`
      fs.renameSync(absPath, newpath)

      var newtag = `![](/assets/log/${assetName})`
      src = src.replace(rex[0], newtag)
    })
  }

  re = /<video src="(.*)"><\/video>/gim
  mtc = src.match(re)
  if (mtc) {
    mtc.forEach(d => {
      var rex = re.exec(d)

      var r = parseInt(Math.random() * 1000)
      var absPath = path.resolve('pub', rex[1])

      var assetName = slugify(`n${r}_` + path.basename(absPath)).toLowerCase()

      var newpath = `./static/assets/log/${assetName}`
      fs.renameSync(absPath, newpath)

      src = src.replace(rex[0], `<video autoplay muted loop src="/assets/log/${assetName}"></video>`)
    })
  }

  var today = moment().subtract(4, 'hours')

  var frontmatter = `---
title: ${title}
date: ${today.format('YYYY-MM-DD HH:mm:00 +0100')}
---

`
  var dest = frontmatter + src
  var finalname = `${today.format('YYYY-MM-DD')}-${filename}.md`
  fs.writeFileSync(`./content/log/${finalname}`, dest)
  fs.unlinkSync(`./pub/${f}`)
})
