---
title: Tableau Extension the basics with Vue.js
date: 2021-02-08 07:00:00 +0100
subtitle: 8th February, 2021
style: blue
cover: ../../tableau.png
categories: Tutorials
tags: [tutorial, tableau, extensions, vue]
---

In this post I want to outline the first steps to start developing a Tableau Extension using Vue.js and its CLI.

A Tableau Extension is basically a web-app that communicates with Tableau platform by using a proxy js library.

Vue.js is great to prototype web-app fast, let's see how to get started with it.

## Bootstrap

Assuming you already have Node.js and @vue/cli installed, just create an empty Vue (v2) project with `vue create my-first-tablueau-extension`.

Next, download the Tablueau Extensions API library from [here](https://github.com/tableau/extensions-api) (it's the file in `lib/tableau.extensions.1.latest.min.js`) and put it within the `public` folder of the Vue project.

Unfortunately the Tableau library is not ES6 ready, therefore, we need to include it the old fashioned way, by adding a `script` tag in the `index.html` template file:

```html
<script src="<%= BASE_URL %>tableau.extensions.1.latest.min.js"></script>
```

## Trex file

Every Tableau Extension needs a definition file which is essentially an XML file with some basic configurations. It's the file used by Tableau Desktop to load the extension properly.

Since we're developing our extension locally using the @vue/cli toolchain, make sure to compile right the source location in the `.trex` file:

```xml
<source-location>
  <url>http://localhost:8080/index.html</url>
</source-location>
```

## The main App

I want to keep it simple, thus, here the code of `App.vue` that starts interacting with the Tableau library, just the initial bootstrap and a first basic interaction to get the Dashboard name:

```vue
<template>
  <div id="app">
    <p>{{err}}</p>
    <p>{{dashName}}</p>
  </div>
</template>



<script>
export default {
  data(){
    return{
      err: '',
      dashboard:null
    }
  },
  computed:{
    dashName(){
      return this.dashboard ? this.dashboard.name : ''
    }
  },
  async mounted(){
    
    const ext = window.tableau.extensions
    
    try{
      
      await ext.initializeAsync()
      
      this.dashboard = ext.dashboardContent.dashboard
      
    }catch(err){
      this.err = err
    }
  }
}
</script>
```

Some notes on the code above.

The `err` variable is used to show possible initialization errors.

Since the Tableau library is not ES6 friendly, we need to call it using the global name-space, the `window` object, therefore, Tableau extensions can be read from `window.tableau.extensions`.

Even if it's not ES6 compliant, the library methods return a Promise, thus, we can use `async/await` with them. 

If you run `npm run serve` you shoud see the error in the browser, that's expected. While within Tableau Desktop you should see the Dashboard name.

Happy extending!