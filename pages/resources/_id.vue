<template>
    <div class="reader">
        <div class="post-header">
            <h1>{{page.title}}</h1>
        </div>
        <nuxt-content :document="page" />
    </div>
</template>


<script>

export default {
    head () {
        return {
            title: this.title
        }
    },
    async asyncData({ $content, params, error }) {
        let page = await $content('/resources', params.id).fetch()
        const title = page.title
        return {
            page,
            title
        }
    },
    mounted(){
        this.$store.commit('setRelated', null)
    }
}
</script>