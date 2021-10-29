---
title: How to use syntax Highlight Js in a Nuxt website
date: 2021-10-29 05:19:00 +0100
---



Here the tips to include syntax highliting using [Highlight.js](https://highlightjs.org/) library in a Nuxt project.

I've learned the different required parts from [here](https://yasminzy.com/vue/highlight/#steps) and [here](https://dev.to/olawanle_joel/how-to-make-use-of-vue-js-plugins-in-nuxt-2bao).

Basically, there's a Vue plugin, `vue-highlight.js`, that includes HighLight.js capability easily:

```shell
npm i highlight.js vue-highlight.js
```

Then, we need to create a Nuxt plugin, such as `syntaxHigh.js` with this code:

```js
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'

import 'highlight.js/styles/vs.css'

Vue.use(VueHighlightJS, {
  languages: {
    javascript
  }
})
```

and save it in the folder `plugins` within your Nuxt project.

Then, activate the plugin in the Nuxt config file `nuxt.config.js`:

```js
export default{
  plugins: [
    { src: '~/plugins/syntaxHigh.js' }
  ],
}
```

Finally, use the component into your Nuxt components:

```vue
<template>
	<div>
    <highlight-code lang="js">
      var a = 1;
  	</highlight-code>
  </div>
</template>
```

That's is!

