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

const files = getAllFiles('./dist')
console.log(files)

files.forEach(file => {
  let f = fs.readFileSync(file, 'utf-8')
  f = f.replace(/<script.*?<\/script>/mig, '')
  f = f.replace(/<link rel="preload" href=.*?as="script">/mig, '')
  fs.writeFileSync(file, f, 'utf-8')
})
