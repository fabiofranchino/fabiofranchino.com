<template>
    <blockquote>
        You can learn more exploring my 
        <nuxt-link to="/blog">{{stat.blog}} articles</nuxt-link>, 
        peep my <nuxt-link to="/log">{{stat.log}} notes</nuxt-link>, 
        for a total of <strong>{{stat.words | format}}</strong> words, so far.
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