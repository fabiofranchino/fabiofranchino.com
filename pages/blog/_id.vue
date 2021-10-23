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

        <PrevNext />
        <!-- <PatchLink :editLink="editLink" />
        <Subscribe /> -->

        
    </div>
</template>




<script>
import Subscribe from '@/components/Subscribe'
import PrevNext from '@/components/PrevNext'
import PatchLink from '@/components/PatchLink'
import stats from '@/components/global/stats.json'

export default {
    components:{
        Subscribe, PrevNext, PatchLink
    },
    data(){
        return{
            prevS:'',
            nextS:''
        }
    },
    async asyncData({ store, $content, params, error }) {

        let page = null
        let editLink = ''

        try{
            page = await $content('blog', params.id).fetch()
            editLink = `https://github.com/fabiofranchino/fabiofranchino.com/edit/master/content/blog/${page.filename}`
        }catch(err){
            error({ statusCode: 404, message: 'Post not found' })
        }

        let res = await $content('blog')
            .only(['slug', 'tags', 'title', 'path'])
            .fetch()

        res = res.filter(d => !d.draft)

        const thisPage = res.filter(d => d.slug === params.id)[0]
        const thisIndex = res.indexOf(thisPage)

        let prevS = ''
        let nextS = ''

        if(thisIndex >= 0){
            if(thisIndex > 0){
                prevS = res[thisIndex-1]
            }
            if(thisIndex < res.length - 1){
                nextS = res[thisIndex+1]
            }
        }
        
        res.forEach(d => {
            d.relevance = 0
            if(d.slug !== thisPage.slug){
                thisPage.tags.forEach(t => {
                    if(d.tags && d.tags.indexOf(t) >= 0) d.relevance++
                })
            }
        })

        res.sort((a,b) => {
            return a.relevance - b.relevance
        })

        res = res.filter((d,i) => d.relevance>0).filter((d,i) => i<5)

        store.commit('setRelated', res)
        store.commit('setPrevSlug', prevS)
        store.commit('setNextSlug', nextS)
        store.commit('setCurrent', thisPage)

        return {
            page,
            editLink
        }
    },
    // async fetch({ store, $content, params }){
        
    // },
    head () {
        const coverImage = this.page.cover ? '&cover=https://www.fabiofranchino.com' + this.page.cover : ''
        let cover = process.env.NUXT_ENV_SOCIAL_CARD_GENERATOR_URL + '?title=' + this.page.title + '&cta=' + stats.blog + ' posts and counting)' + coverImage
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