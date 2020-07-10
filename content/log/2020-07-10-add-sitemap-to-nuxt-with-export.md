---
title: Add sitemap to Nuxt with export
date: 2020-07-10 04:51:00 +0100
---

 and content

If you are using the new `export` function of Nuxt with the `@nuxt/content` module, which generates automatically all the routes with an internal crawler, maybe you're facing an issue in case you'd like to add the `sitemap` to your generated website.

Previously, with the `generate` command, you were forced to create the routes array by hand, therefore, the `@nuxtjs/sitemap` configuration were already set with the default settings because it uses the `generate` property to know with route to consider:

```javascript
generate: {
    routes: myRoutes
},
sitemap: {
  hostname: 'https://www.example.com'
}
```

With the new `export` the generate field is not set anymore, thus, here my solution.

Basically, I populate the routes array using a hook of the `content` module:

```javascript
hooks: {
  'content:file:beforeInsert': d => {
    routes.push(d.path)
  }
}
```

then, in the sitemap config I declare which array to use:

```javascript
sitemap: {
  hostname: 'https://www.example.com',
  routes: routes
}
```

