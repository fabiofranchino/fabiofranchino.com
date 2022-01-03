<template>
    <div>
        <div class="header">
            <h1>Tag: {{title}}</h1>
            <h3>There are {{links.length}} entries</h3>
        </div>

        <div class="container">
            <Row :item="item" v-for="item in links" :key="item.path"></Row>
        </div> 

    </div>
</template>




<script>
import Row from '@/components/Row'

export default {
    components:{
        Row
    },
    async asyncData({ store, $content, params, error }) {
        
        const tags = await import(`@/tags.json`)
        const tagsArr = [...tags.default]

        const tag = tagsArr.find(d => d.title.toLowerCase() === params.id)
        const links = tag.children
        links.forEach(l => {
            l.path = l.url.slice(0, -1)
        })

        return {
            title: tag.title.charAt(0).toUpperCase() + tag.title.slice(1),
            links,
            slug: params.id
        }
    },
    head () {
        const tit = 'Tag: ' + this.title + ' ('+this.links.length+' entries)'
        let cover = process.env.NUXT_ENV_SOCIAL_CARD_GENERATOR_URL + '?title=' + this.title + '&cta=' + this.links.length + ' entries&check=tag&site=tag'
        return {
            title: tit,
            meta: [
                { hid:'ogtit', property: 'og:title', content: tit },
                { hid:'twtit', name: 'twitter:title', content: tit },
                { hid:'ogimg', property: 'og:image', content: `${cover}` },
                { hid:'twimg', name: 'twitter:image', content: `${cover}` },
                { hid:'ogurl', property: 'og:url', content: `https://www.fabiofranchino.com/tag/${this.slug}/` },
                { hid:'twurl', name: 'twitter:url', content: `https://www.fabiofranchino.com/tag/${this.slug}/` }
            ]
        }
    }
}

</script>




<style scoped>
.header{
    padding: 0 1rem;
}
.container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
}

h1{
    margin: 0;
}
h3{
    padding: 0;
    margin: 0;
    border: none;
}
</style>