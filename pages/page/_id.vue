<template>
    <div class="page">
        <div class="body">
            <h1>{{page.title}}</h1>
            <nuxt-content :document="page" />
        </div>
    </div>
</template>




<script>
export default {
    async asyncData({ $content, params }) {
        let cnt = await $content('page', params.id).fetch()
        return {
            page: cnt
        }
    }
}
</script>



<style scoped>
.page{
    display: flex;
}
</style>