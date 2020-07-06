<template>
    <div class="reader">
        <div class="post-header">
            <h1>{{page.title}}</h1>
            <p>Posted on {{page.humandate}}
            </p>
        </div>
        
        <nuxt-content :document="page" />

        <Subscribe />
    </div>
</template>




<script>
import Subscribe from '@/components/Subscribe'

export default {
    components:{
        Subscribe
    },
    async asyncData({ $content, params, error }) {
        let cnt = null

        try{
            cnt = await $content('tip', params.id).fetch()
        }catch(err){
            error({ statusCode: 404, message: 'Post not found' })
        }

        return {
            page: cnt
        }
    },
    
    head () {
        let cover = 'social.png'
        return {
            title: this.page.title,
            meta: [
                { hid:'published_time', property: 'article:published_time', content: this.page.date },
                { hid:'ogtit', property: 'og:title', content: this.page.title },
                { hid:'twtit', name: 'twitter:title', content: this.page.title },
                { hid:'ogimg', property: 'og:image', content: `https://www.presenta.cc/${cover}` },
                { hid:'twimg', name: 'twitter:image', content: `https://www.presenta.cc/${cover}` },
                { hid:'ogurl', property: 'og:url', content: `https://www.presenta.cc/blog/${this.page.slug}` },
                { hid:'twurl', name: 'twitter:url', content: `https://www.presenta.cc/blog/${this.page.slug}` }
            ]
        }
    }
}
</script>




<style scoped>
.post-header{
    text-align: center;
    border-bottom: 1px solid var(--maincolor);
    color:#333;
}
.post-header p{
    font-size:70%;
}
</style>