const glob = require('glob')

const files = glob.sync('**/*.md', { cwd: 'content' })

const list = files.map(d => {
  const folders = d.substr(0, d.lastIndexOf('/'))

  let lastFolder = folders
  if (folders.indexOf('/') >= 0) {
    lastFolder = folders.substr(folders.lastIndexOf('/') + 1, folders.length)
  }

  const slug = d.substr(0, d.lastIndexOf('.'))
  const name = slug.replace(folders + '/', '')
  const filename = d.substr(d.lastIndexOf('/') + 1)
  return {
    filename: filename,
    name: name,
    url: `/${slug}`,
    path: `/${slug}`,
    folders: folders,
    folder: lastFolder
  }
})

module.exports = list
