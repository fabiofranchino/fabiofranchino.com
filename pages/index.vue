<template>
    <div class="reader">
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
        let page = await $content('home').fetch()
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


<style scoped>
.reader >>> h2{
    margin-top: 1rem;
}

.reader >>> .s{
    font-weight: bold;
}
</style>