<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Custom Page not found</h1>
    <h1 v-else>An error occurred {{error}}</h1>
    <nuxt-link to="/">Save me</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>