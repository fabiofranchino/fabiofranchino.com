<template>
    <blockquote>
        You can read more <nuxt-link to="/about">about me</nuxt-link>, exploring my 
        <nuxt-link to="/blog">{{stat.blog}} articles</nuxt-link>, 
        peep my <nuxt-link to="/log">{{stat.log}} notes</nuxt-link> and 
        checking my <a href="https://lib.presenta.cc/">open-source</a> project.
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