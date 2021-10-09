<template>
    <div>
        <div class="header">
            <h1>Tags</h1>
            <h3>Find content by tags and similar topics:</h3>
        </div>
        <div class="container">
            <Row :item="item" v-for="item in posts" :key="item.path"></Row>
        </div>     
    </div>      
</template>



<script>
import Row from '@/components/Row'


export default {
    components:{
        Row
    },
    head () {
        return {
            title: 'Tags'
        }
    },
    async asyncData({ store, $content, params, error }) {

        const tags = await import(`@/tags.json`)
        const tagsArr = [...tags.default]

        tagsArr.forEach(tag => {
            tag.title = tag.title.charAt(0).toUpperCase() + tag.title.slice(1)
            tag.humandate = '' + tag.children.length + ' entries'
        })
        
        return {
            posts: tagsArr
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