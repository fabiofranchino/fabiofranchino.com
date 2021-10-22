const fs = require('fs')
const path = require('path')

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      if (path.extname(file) === '.html') {
        arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
      }
    }
  })

  return arrayOfFiles
}

const addCDNBaseToImages = html => {
  const reg = /<img.*?src="([^"]*)"[^>]*>(?:<\/img>)?/gmi
  const images = html.match(reg)
  let parsed = html

  if (!images) return html

  images.forEach(img => {
    const r = /<img.*?src="([^"]*)"[^>]*>(?:<\/img>)?/gmi
    const res = r.exec(img)

    const src = res[1]
    if (src.indexOf('data:image') === -1 && src.indexOf('https') === -1) {
      const newTag = res[0].replace(src, 'https://ajahofrzam.cloudimg.io/v7/_fcom_' + src)
      parsed = parsed.replace(res[0], newTag)
    }
  })

  return parsed
}

const files = getAllFiles('./dist')
console.log(files)

files.forEach(file => {
  let f = fs.readFileSync(file, 'utf-8')
  f = f.replace(/<script.*?<\/script>/mig, '')
  f = f.replace(/<link rel="preload" href=.*?as="script">/mig, '')
  f = addCDNBaseToImages(f)
  fs.writeFileSync(file, f, 'utf-8')
})
