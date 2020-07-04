<template>
    <div>
        Blog List
        <ul>
            <li v-for="item in posts" :key="item.url">
                <nuxt-link :to="item.url">{{item.title}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>



<script>
export default {
    head () {
        return {
            title: 'Blog'
        }
    },
    async asyncData(){
        let res = await import(`~/content/blog/list.json`)
        return {posts: res.default}
    }
}
</script>