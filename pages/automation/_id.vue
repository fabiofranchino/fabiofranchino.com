<template>
    <div class="reader">
        <div class="post-header">
            <h1>{{page.title}}</h1>
            <p>Posted on {{page.humandate}} in 
                <!-- <nuxt-link :to="page.categories">{{page.categories}}</nuxt-link> -->
                 <br /><em>{{page.reading.text}}</em>
            </p>
        </div>
        
        <nuxt-content :document="page" />

        <PresentaCTA />

    </div>
</template>




<script>
import PresentaCTA from '@/components/PresentaCTA'
import stats from '@/components/global/stats.json'

export default {
    components:{
        PresentaCTA
    },
    data(){
        return{
            prevS:'',
            nextS:''
        }
    },
    async asyncData({ store, $content, params, error }) {

        let page = null

        try{
            page = await $content('automation', params.id).fetch()
        }catch(err){
            error({ statusCode: 404, message: 'Post not found' })
        }

        return {
            page
        }
    },
    // async fetch({ store, $content, params }){
        
    // },
    head () {
        const coverImage = this.page.cover ? '&cover=https://www.fabiofranchino.com' + this.page.cover : ''
        let cover = process.env.NUXT_ENV_SOCIAL_CARD_GENERATOR_URL + '?title=' + this.page.title + '&cta=' + stats.blog + '&check=tutorial&site=blog' + coverImage
        return {
            title: this.page.title,
            meta: [
                { hid:'published_time', property: 'article:published_time', content: this.page.date },
                { hid:'ogtit', property: 'og:title', content: this.page.title },
                { hid:'twtit', name: 'twitter:title', content: this.page.title },
                { hid:'ogimg', property: 'og:image', content: `${cover}` },
                { hid:'twimg', name: 'twitter:image', content: `${cover}` },
                { hid:'ogurl', property: 'og:url', content: `https://fabiofranchino.com/blog/${this.page.slug}` },
                { hid:'twurl', name: 'twitter:url', content: `https://fabiofranchino.com/blog/${this.page.slug}` }
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