<template>
    <div class="reader">
        <div style="position:fixed;width:300px;right:0;top:0;transform:translate(80px,50px)rotate(45deg);z-index:999;"><img src="https://daily.presenta.workers.dev/GhZD3MDlBN:yvLHzHJhJ" /></div>
        
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

.strip{
    position:fixed;width:300px;right:0;top:0;transform:translate(80px,50px)rotate(45deg);z-index:999;
}
</style>