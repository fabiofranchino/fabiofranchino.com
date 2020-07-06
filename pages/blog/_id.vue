<template>
    <div class="reader">
        <div class="post-header">
            <h1>{{page.title}}</h1>
            <p>{{page.reading.text}}, {{toDate}} in 
                <nuxt-link :to="page.categories">{{page.categories}}</nuxt-link>
            </p>
        </div>
        
        <nuxt-content :document="page" />

        <Subscribe />
    </div>
</template>




<script>
import {descending} from 'd3'
import Subscribe from '@/components/Subscribe'

export default {
    components:{
        Subscribe
    },
    async asyncData({ $content, params, error }) {
        console.log('asyncData')
        let cnt = null

        try{
            cnt = await $content('blog', params.id).fetch()
        }catch(err){
            error({ statusCode: 404, message: 'Post not found' })
        }

        return {
            page: cnt
        }
    },
    async fetch({ store, $content, params }){
        let res = await $content('blog').fetch()
        const thisPage = res.filter(d => d.slug === params.id)[0]
        
        res.forEach(d => {
            d.relevance = 0
            if(d.slug !== thisPage.slug){
                thisPage.tags.forEach(t => {
                    if(d.tags.indexOf(t) >= 0) d.relevance++
                })
            }
        })

        res.sort((a,b) => {
            return descending(a.relevance, b.relevance)
        })

        res = res.filter((d,i) => d.relevance>0).filter((d,i) => i<5)

        store.commit('setRelated', res)
    },
    head () {
        let cover = this.page.cover ? `blog/covers/${this.page.slug}.jpg` : 'social.png'
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
    },
    computed:{
        toDate(){
            let date = new Date(this.page.date)
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString(undefined, options)
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