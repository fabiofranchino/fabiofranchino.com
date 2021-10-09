---
title: Using AlpineJs in a VueJs app
date: 2021-10-09 18:25:00 +0100
---



Alpine.js uses the same reactivity module of Vue.js.

For pure testing purposes I wanted to try using an Alpine component in a Vue.js app.

Here a basic App.vue with an Alpine component:

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
  </div>
</template>


<script>
import Alpine from 'alpinejs'
Alpine.start() // you need to explicitly start Alpine

export default {
  name: 'App'
}
</script>
```

