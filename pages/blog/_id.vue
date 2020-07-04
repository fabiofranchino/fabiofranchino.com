<template>
    <div class="page">
        <div class="side">
            <li v-for="item in list" :key="item.url">
                <nuxt-link :to="item.url">{{item.title}}</nuxt-link>
            </li>
        </div>
        <div class="body">
            <div class="content" v-html="html"></div>
        </div>
    </div>
</template>




<script>
export default {
    async asyncData({ params, error }) {
        let res = null
        let cnt = null

        try{
            res = await import(`~/content/blog/list.json`)
        }catch(err){
            res = {default:[]}
        }

        try{
            cnt = await import(`~/content/blog/${params.id}.md`)
        }catch(err){
            error({ statusCode: 404, message: 'Post not found' })
        }
        
        return {
            slug: params.id,
            cnt: cnt,
            list: res.default
        }
    },
    head () {
        let cover = this.meta.cover ? `blog/covers/${this.slug}.jpg` : 'social.png'
        return {
            title: this.meta.title,
            meta: [
                { hid:'published_time', property: 'article:published_time', content: this.meta.date },
                { hid:'ogtit', property: 'og:title', content: this.meta.title },
                { hid:'twtit', name: 'twitter:title', content: this.meta.title },
                { hid:'ogimg', property: 'og:image', content: `https://www.presenta.cc/${cover}` },
                { hid:'twimg', name: 'twitter:image', content: `https://www.presenta.cc/${cover}` },
                { hid:'ogurl', property: 'og:url', content: `https://www.presenta.cc/blog/${this.slug}` },
                { hid:'twurl', name: 'twitter:url', content: `https://www.presenta.cc/blog/${this.slug}` }
            ]
        }
    },
    computed:{
        meta(){
            return this.cnt.attributes
        },
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