import fs from 'fs'
import routes from './libs/dumpRoutes.js'
import index from './libs/dumpIndex.js'
import metaDefault from './libs/metaDefault.js'
import path from 'path'
import FMMode from 'frontmatter-markdown-loader/mode'

const tips = require('./content/tips.json')
const allroutes = routes.concat(tips).map(d => d.url)

fs.writeFileSync('content/index.json', JSON.stringify(index(routes)))

export default {
  mode: 'universal',

  head: {
    titleTemplate: '%s @ Fabio Franchino',
    meta: metaDefault,
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,900;1,400&display=swap' },
      { rel: 'icon', href: '/favicon.png' }
    ]
  },
  css: [
    '~/node_modules/normalize-css/normalize.css',
    '~/css/style.css'
  ],

  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content'),
        options: {
          mode: [FMMode.VUE_COMPONENT],
          vue: {
            root: 'markdown-body'
          }
        }
      })
    }
  },
  generate: {
    routes: allroutes
  },
  modules: [
    '@nuxtjs/sitemap',
    ['nuxt-canonical', { baseUrl: 'https://www.fabiofranchino.com' }]
  ],
  sitemap: {
    hostname: 'https://www.fabiofranchino.com'
  }
}
