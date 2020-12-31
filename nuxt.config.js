import metaDefault from './libs/metaDefault.js'
import readingTime from 'reading-time'
import marked from 'marked'

const allRoutes = []

export default {
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
    '@nuxtjs/feed',
    'vue-plausible',
    ['nuxt-canonical', { baseUrl: 'https://www.fabiofranchino.com' }]
  ],
  content: {
    markdown: {
      prism: {
        theme: 'css/prism-atom-dark.css'
      }
    }
  },
  feed: [
    {
      path: '/feed.xml',
      create (feed, data) {
        feed.options = {
          title: 'Fabio Franchino',
          link: 'https://fabiofranchino.com/feed.xml',
          description: 'Fabio Franchino RSS feed',
          language: 'en'
        }

        allRoutes.forEach(post => {
          feed.addItem({
            title: post.title,
            id: post.path,
            link: post.fullurl,
            content: post.html,
            date: new Date(post.date)
          })
        })

        feed.addContributor({
          name: 'Fabio Franchino',
          email: 'fabio.franchino@gmail.com',
          link: 'https://www.fabiofranchino.com'
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ],
  generate: {
    routes: [
      '/setup-github-codepen'
    ]
  },
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
      d.cover = d.cover ? `/assets/posts/${d.slug}/${d.cover}` : '/social.jpg'
      d.html = marked(d.text)
      d.url = d.path
      d.fullurl = 'https://www.fabiofranchino.com' + d.path

      if (!d.draft) allRoutes.push(d)
    }
  },
  sitemap: {
    hostname: 'https://www.fabiofranchino.com',
    routes: allRoutes
  },
  plausible:{
    domain: 'fabiofranchino.com'
  }
}
