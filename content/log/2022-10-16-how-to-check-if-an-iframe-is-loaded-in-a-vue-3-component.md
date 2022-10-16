---
title: How to check if an iframe is loaded in a Vue 3 component
date: 2022-10-16 08:39:00 +0100
---



Suppose you have an iframe in your component:

```vue
<template>
	<iframe src="/somepath.html"></iframe>
</template>
```

Here the code to listen for the loaded handler and change the class based on the iframe loaded status:

```vue
<script setup>
  import { ref, onMounted } from 'vue'
	
  const frame = ref()
  const loaded = ref(false)
  
  onMounted(() => {
    frame.value.onload = () => {
      loaded.value = true
    }
  })
</script>


<template>
	<iframe :class={loaded} ref="frame" src="/somepath.html"></iframe>
</template>
```

You can see that we need to refer the iframe usinf `ref` and using another reactive variable to change the current loaded status. `onMouted` is the initial trigger to attach the iframe native `onload` handler.