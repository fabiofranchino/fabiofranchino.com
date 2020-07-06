import metaDefault from './libs/metaDefault.js'
import readingTime from 'reading-time'

export default {
  mode: 'universal',

  head: {
    titleTemplate: '%s @ Fabio Franchino',
    meta: metaDefault,
    link: [
      { rel: 'icon', href: '/favicon.png' }
    ]
  },
  css: [
    '~/node_modules/normalize-css/normalize.css',
    '~/css/style.css'
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    ['nuxt-canonical', { baseUrl: 'https://www.fabiofranchino.com' }]
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      const reg = /\d{4}-\d{2}-\d{2}/
      const mtc = reg.exec(document.slug)
      if (mtc) {
        document.slug = document.slug.substr(11)
        document.path = document.dir + '/' + document.slug
        document.reading = readingTime(document.text)
      }
    }
  },
  sitemap: {
    hostname: 'https://www.fabiofranchino.com'
  }
}
