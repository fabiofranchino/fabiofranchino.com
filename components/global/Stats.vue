<template>
    <blockquote>
        You can read more <nuxt-link to="/about">about me</nuxt-link> by exploring my 
        <nuxt-link to="/blog">{{stat.blog}} articles</nuxt-link> and <nuxt-link to="/log">{{stat.log}} notes</nuxt-link>, 
        or by checking out my <a href="https://github.com/presenta-software/presenta-lib">open-source</a> project.
    </blockquote>
</template>



<script>
import json from './stats.json'
const form = new Intl.NumberFormat()

export default {
    mounted(){
        console.log(json)
    },
    computed:{
        stat(){
            return json
        }
    },
    filters:{
        format(v){
            return form.format(v)
        }
    }
}
</script>