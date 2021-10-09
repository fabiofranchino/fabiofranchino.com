<template>
    <div>
        <div class="header">
            <h1>Tag: {{title}}</h1>
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
            l.path = l.url
        })

        return {
            title: tag.title.charAt(0).toUpperCase() + tag.title.slice(1),
            links 
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