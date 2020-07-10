---
title: Nuxt Content and Feed
date: 2020-07-10 06:05:00 +0100
---



Here my solution to create a `feed.xml` with Nuxt and the `@nuxt/content` module by using `@nuxtjs/feed`.

First, in `nuxt.config.js`, I create the routes array using the `content` hook `content:file:beforeInsert`, and, in the same function, I prepare the content for the feed article, since I want to use HTML instead markdown:

```javascript
hooks: {
  'content:file:beforeInsert': d => {
    d.html = marked(d.text)
    routes.push(d)
  }
}
```

then, the setting for the `feed` module:

```javascript
feed: [
  {
    path: '/feed.xml',
    create feed {
      console.log(routes.map(d => d.path))
      feed.options = {
        title: 'Example',
        link: 'https://www.example.com/feed.xml',
        description: 'Nuxt RSS feed'
      }

      routes.forEach(post => {
        feed.addItem({
          title: post.title,
          id: post.path,
          link: `https://www.example.com${post.path}`,
          content: post.html
        })
      })

    },
    type: 'rss2'
  }
]
```

Hope this help.