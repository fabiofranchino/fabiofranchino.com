---
title: How to use the mount hook in Vue 3 component
date: 2022-10-16 08:14:00 +0100
---



Assuming your component is using the new composition syntax:

```vue
<script setup>
    import { onMounted } from 'vue'
  
  	const mounted = 'NO'
    
    onMounted(() => {
      mounted = 'YES'
    })
</script>


<template>
	<div>
    {{mounted}}
  </div>
</template>
```

The variable above is correctly changed after the component has mounted but the template doen't react because the variable is not reactive. Here the fix using the `ref` hook:

```vue
<script setup>
    import { onMounted, ref } from 'vue'
  
  	const mounted = ref('NO')
    
    onMounted(() => {
      mounted.value = 'YES'
    })
</script>


<template>
	<div>
    {{mounted}}
  </div>
</template>
```



