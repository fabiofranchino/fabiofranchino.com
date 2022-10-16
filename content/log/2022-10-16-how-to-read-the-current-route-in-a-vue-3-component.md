---
title: How to read the current route in a Vue 3 component
date: 2022-10-16 08:32:00 +0100
---



Here the way to check which is the current route in order to do some logic base on its value:

```vue
<scritp setup>
    import { onMounted, computed } from 'vue'
    import { useRoute } from 'vue-router'
  
  	const route = useRoute()
    const isHome = computed(() => route.name === 'home')
</scritp>


<template>
	<div>
    <span v-if="!isHome">HOME</span>
  </div>
</template>
```

