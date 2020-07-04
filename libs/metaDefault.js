module.exports = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { name: 'robots', content: 'index, follow' },

  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: 'Presenta, a presentation tool' },
  { property: 'og:description', content: 'Build presentations the modern way.' },

  { hid: 'ogtit', property: 'og:title', content: 'Presenta, a presentation tool' },
  { hid: 'ogurl', property: 'og:url', content: 'https://www.presenta.cc/' },
  { hid: 'ogimg', property: 'og:image', content: 'https://www.presenta.cc/social.png' },

  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@fabiofranchino' },
  { name: 'twitter:creator', content: '@fabiofranchino' },
  { name: 'twitter:description', content: 'Build presentations the modern way.' },

  { hid: 'twtit', name: 'twitter:title', content: 'Presenta, a presentation tool' },
  { hid: 'twurl', name: 'twitter:url', content: 'https://www.presenta.cc/' },
  { hid: 'twimg', name: 'twitter:image', content: 'https://www.presenta.cc/social.png' },

  { hid: 'description', name: 'description', content: 'Presenta, a presentation tool. Build presentations the modern way.' },
  { hid: 'keywords', name: 'keywords', content: 'presentation, data, information, presenting, speech, pitch' },
  { hid: 'author', name: 'author', content: 'Fabio Franchino' },
  { hid: 'published_time', name: 'article:published_time', content: '' }

]
