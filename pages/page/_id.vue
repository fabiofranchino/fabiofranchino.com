<template>
    <div class="page">
        <div class="body">
            <div class="content" v-html="html"></div>
        </div>
    </div>
</template>




<script>
export default {
    async asyncData({ params }) {
        let cnt = await import(`~/content/page/${params.id}.md`)
        return {
            slug: params.id,
            cnt: cnt
        }
    },
    computed:{
        html(){
            return this.cnt.html
        }
    }
}
</script>



<style scoped>
.page{
    display: flex;
}
</style>