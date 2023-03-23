<template>
    <blockquote>
        You can explore my 
        <nuxt-link to="/blog/">{{stat.blog}} articles</nuxt-link> and <nuxt-link to="/log/">{{stat.log}} TIL</nuxt-link>
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