import metaDefault from './libs/metaDefault.js'
import readingTime from 'reading-time'

export default {
  mode: 'universal',
  components: true,
  head: {
    titleTemplate: '%s @ Fabio Franchino',
    meta: metaDefault,
    link: [
      { rel: 'icon', href: '/favicon.png' }
    ],
    script: [
      { src: 'https://production-assets.codepen.io/assets/embed/ei.js', async: true }
    ]
  },
  css: [
    '~/node_modules/normalize-css/normalize.css',
    '~/css/style.css'
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    // '@nuxtjs/feed',
    ['nuxt-canonical', { baseUrl: 'https://www.fabiofranchino.com' }]
  ],

  feed: [
    {
      path: '/feed.xml', // The route to your feed.
      // async create(feed) {}, // The create function (see below)
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: ['Some additional data'] // Will be passed as 2nd argument to `create` function
    }
  ],

  hooks: {
    'content:file:beforeInsert': d => {
      // convert the jekyll style slug
      const reg = /\d{4}-\d{2}-\d{2}/
      const mtc = reg.exec(d.slug)
      if (mtc) {
        d.slug = d.slug.substr(11)
        d.path = d.dir + '/' + d.slug
      }

      // add the reading time
      d.reading = readingTime(d.text)

      // add the readable date
      const date = new Date(d.date)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      d.humandate = date.toLocaleDateString(undefined, options)

      // add the cover path
      d.cover = d.cover ? `assets/posts/${d.slug}/${d.cover}` : null
    }
  },
  sitemap: {
    hostname: 'https://www.fabiofranchino.com'
  }
}
