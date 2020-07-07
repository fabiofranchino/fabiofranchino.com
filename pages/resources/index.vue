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
        //let list = await $content('resources').fetch()
        let page = await $content('resources', '/home').fetch()
        const title = page.title
        return {
            page,
            title,
            //list
        }
    },
    mounted(){
        this.$store.commit('setRelated', null)
    }
}
</script>