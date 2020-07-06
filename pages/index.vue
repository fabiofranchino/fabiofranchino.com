<template>
    <div class="page">
    <h1>Hello! I'm Fabio Franchino</h1>
    <h3>Senior Designer/Technologist</h3>
    <p>I'm pretty good at:</p>
    <ul>
      <li>Designing, prototyping and developing <em>interactive software</em></li>
      <li>Teaching <em>Creative Coding</em> to non-tech people</li>
      <li>Mentoring teams in design and technology</li>
    </ul>
    <h3>Need to talk?</h3>
    <p class="bot">A quick <a class="btn" href="mailto:hello@fabiofranchino.com">e-mail</a> is pretty damn good to start a conversation!</p>
    <p class="mini">Oh! Did I mention you don't have to accept any weird cookie banner because you're <strong>not tracked</strong> at all?</p>
  </div>
</template>


<script>

export default {
    async asyncData({ $content, params, error }) {
        let res = await $content('blog').fetch()
        return {
            list: res
        }
    },
    mounted(){
        this.$store.commit('setRelated', null)
    }
}
</script>