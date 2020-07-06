<template>
    <div>
        <div class="header">
            <h1>I throw interesting stuff here.</h1>
            <h3>Usually quickly and roughly. 
                It's like a public bookmarks + notes.</h3>
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
            title: 'Logs'
        }
    },
    async asyncData({ store, $content, params, error }) {
        let res = await $content('log').sortBy('date', 'desc').fetch()
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