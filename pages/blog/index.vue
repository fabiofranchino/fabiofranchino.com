<template>
    <div>
        <div class="header">
            <h1>I document what I learn.</h1>
            <h3>I try my best to write relevant things in a clear way. Always learning though.</h3>
        </div>

        <div class="container">
            <Card :item="item" v-for="item in posts" :key="item.path" />
        </div>  
    </div>     
</template>



<script>
import Card from '@/components/Card'

export default {
    components:{
        Card
    },
    head () {
        return {
            title: 'Articles'
        }
    },
    async asyncData({ store, $content, params, error }) {
        let res = await $content('blog')
            .sortBy('date', 'desc')
            .only(['title', 'cover', 'slug', 'path', 'humandate'])
            .fetch()
        res = res.filter(d => !d.draft)
        store.commit('setRelated', null)
        res.forEach(d => {
            d.cover = d.cover + '?w=450'
        })
        return {
            posts:res
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