---
title: How to use environment variables in Vue 3 component in a Vite based project
date: 2022-10-16 08:14:00 +0100
---



This assume you have a **Vue 3** project with **Vite CLI** up and running.

Se the variable in the `.env` file:

```shell
VITE_APP_MY_VAR=http://127.0.0.1:5174
```

Remember that `VITE_APP_` prepend is required in order to let them accessible from within Vue components.

Here the component:

```vue
<script setup>
   const myVar = import.meta.env.VITE_APP_MY_VAR
</script>


<template>
	<div>
    {{myVar}}
  </div>
</template>
```

