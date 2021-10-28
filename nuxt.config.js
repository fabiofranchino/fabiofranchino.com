import metaDefault from './libs/metaDefault'
import readingTime from 'reading-time'
import './stats.js'
import extract from './extract.js'
import fs from 'fs'

const allRoutes = []
let tagRoutes = []

export default {
  components: true,
  target: 'static',
  router: {
    prefetchLinks: false
  },
  head: {
    titleTemplate: '%s @ Fabio Franchino',
    meta: metaDefault,
    link: [
      { rel: 'icon', href: '/favicon.png' }
    ],
    script: [
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
    routes: () => {
      console.log('routes')
      if (process.env.NUXT_ENV_LOCAL) {
        tagRoutes = extract(allRoutes)
        fs.writeFileSync('./tags.json', JSON.stringify(tagRoutes), 'utf-8')
      } else {
        const src = fs.readFileSync('./tags.json', 'utf-8')
        tagRoutes = JSON.parse(src)
      }
      return [
        '/setup-github-codepen/'
      ].concat(tagRoutes)
    }
  },
  hooks: {
    'build:before': d => {
      console.log('build:before')
    },
    'generate:before': d => {
      console.log('generate:before')
    },
    'content:file:beforeInsert': d => {
      // convert the jekyll style slug
      const reg = /\d{4}-\d{2}-\d{2}/
      const mtc = reg.exec(d.slug)

      if (mtc) {
        d.filename = d.slug + '.md'
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
      d.url = d.path + '/'
      d.fullurl = 'https://www.fabiofranchino.com' + d.path

      if (!d.draft) allRoutes.push(d)
    }
  },
  sitemap: {
    hostname: 'https://www.fabiofranchino.com',
    routes: () => {
      return allRoutes.concat(tagRoutes)
    },
    exclude: [
      '/showcase'
    ]
  }
}
