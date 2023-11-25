<template>
    <div>
        <div class="header">
            <h1>I throw interesting stuff here.</h1>
            <h3>Usually quickly and roughly. 
                It's like a public container of bookmarks, code snippets and notes, all together.</h3>
        </div>
        <!-- <Search :source="posts" @results="onResults" /> -->
        <div class="container">
            <Card :item="item" v-for="item in results" :key="item.path" />
        </div>     
    </div>      
</template>



<script>
import Card from '@/components/Card'
import Search from '@/components/Search'

export default {
    components:{
        Card, Search
    },
    head () {
        return {
            title: 'Logs'
        }
    },
    async asyncData({ store, $content, params, error }) {
        let res = await $content('log')
            .sortBy('date', 'desc')
            .only(['title', 'slug', 'path', 'humandate'])            
            .fetch()
        store.commit('setRelated', null)

        res.forEach(d => {
            d.cover = 'social.jpg'
        })

        return {
            posts: res,
            results: res
        }
    },
    
    methods:{
        onResults(res){
            this.results = res
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