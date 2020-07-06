<template>
    <div>
        <div class="header">
            <h1>I annotate little tech finding here.</h1>
            <h3>Usually alongside with a chunk of code. 
                It's my public code snippets repository. 
                Surprisingly, I use it myself from time to time.</h3>
        </div>
        <div class="container">
            <Row :item="item" v-for="item in posts" :key="item.path" />
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
            title: 'Tips'
        }
    },
    async asyncData({ store, $content, params, error }) {
        let res = await $content('tip').sortBy('date', 'desc').fetch()
        store.commit('setRelated', null)
        return {
            posts: res
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