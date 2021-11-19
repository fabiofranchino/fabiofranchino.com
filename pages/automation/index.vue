<template>
    <div>
        <div class="header">
            <h1>Automation!</h1>
            <h3>Articles about digital automation, automatic data-driven documents generation, marketing automation, smart data integrations and automation no-code and low-code tools & platforms.</h3>
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
            title: 'Automation'
        }
    },
    async asyncData({ store, $content, params, error }) {
        let res = await $content('automation')
            .sortBy('date', 'desc')
            .only(['title', 'cover', 'slug', 'path', 'humandate'])
            .fetch()
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