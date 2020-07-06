<template>
    <div>
        <h1>Categories List</h1>
        <ul>
            <li v-for="cat in categories" :key="cat.key">{{cat.key}} ({{cat.values.length}})</li>
        </ul>
    </div>
</template>


<script>

export default {
    async asyncData({ params, error }) {
        let res = []

        // try{
        //     let cts = await import(`~/content/index.json`)
        //     let arr = cts.default
        //     res = d3.nest()
        //         .key(d => d.front.category)
        //         .entries(arr)
        // }catch(err){
        // }
        
        return {
            categories: res
        }
    },
    head () {
        return {
            title: 'Categories'
        }
    }
}
</script>