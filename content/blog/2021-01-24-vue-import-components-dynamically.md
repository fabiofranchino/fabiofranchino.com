---
title: Vue.js and how to include and render components dynamically
date: 2021-01-24 07:00:00 +0100
subtitle: 24th Jannuaryl, 2021
style: blue
categories: Tutorials
tags: [tutorial, vue, dynamic, component]
---

In this post I'm going to show how to create a Vue.js App with an on-the-fly import capability and how to render them using Vue Router as well.

It's bare-bones, just the mentioned functionality.

## Import components dynamically

Let's create a default Vue app using `vue create your-app` and add the router plugin with `vue add router`.

Then, create a folder within `components` where you're going to put you components you want to include dynamically, let's say, `dynComps`

We need a specific folder because we don't want to include all the components present in the app dynamically.

After that, create this `js` file within the `components` folder:

```js
import Vue from 'vue'

const requireComponent = require.context(
  './dynComps',
  false, // Do not look in subdirectories
  /[\w-]+\.vue$/
)

const list = []

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .split('-')
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    .join('')

  list.push({
    id: componentName.toLowerCase(),
    label: componentName.charAt(0).toUpperCase() + componentName.slice(1)
  })

  Vue.component(componentName, componentConfig.default || componentConfig)
})

export default list
```

The above function look within the `dynComps` folder and load all the `.vue` files, creating and returning a useful array we're going to use later.

## Config the Router

Now we need to configure a bit our Router, here the relevant part:

```js
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:id',
    component: Home
  }
]
```

In this bare-bones app there's  just one view, `Home`. The two routes are meant to render the listing part to show all of our components and the selected component if there's the fragment URL in the Router.

The listing part can be implemented easily with this code:

```vue
<template>
  <div id="app">
      <ul>
        <li v-for="c in comps" :key="c.id">
          <router-link :to="c.id">{{c.label}}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>

import list from '@/components/_globals'

export default {
  computed: {
    comps(){
      return list
    }
  }
}
</script>
```



## Render the component

Now, suppose the user reaches this URL: `http://localhost:8080/compa`. From now on, we want to render the component `CompA.vue` because the fragment `compa` refers to it.

Vue.js comes with a generic component for that specific purpose:

```vue
<component :is="myCompDef"></component>
```

If `myCompDef` is equal to ``CompA` then we're in business.

Here the whole `Home` view that show both the list of available components as well as the business logic to intercept the Router fragment, find the corresponding component definition and render it:

```vue
<template>
  <div id="app">
      <ul>
        <li v-for="c in comps" :key="c.id">
          <router-link :to="c.id">{{c.label}}</router-link>
        </li>
      </ul>
      <component v-if="comp" :is="comp.label"></component>
  </div>
</template>


<script>
import list from '@/components/_globals'

export default {
  computed: {
    id(){
      return this.$route.params.id
    },
    comps(){
      return list
    },
    comp(){
      return this.id ? this.getComp(this.id) : null
    }
  },
  methods:{
    getComp(id){
      let ob = null
      this.comps.forEach(d => {
        if (d.id === id) ob = d
      })
      return ob
    }
  }
}
</script>
```

That's all, here the whole [source code](https://github.com/fabiofranchino/vue-import-components-dynamically/) and you can see the app [here](https://fabiofranchino.github.io/vue-import-components-dynamically/).