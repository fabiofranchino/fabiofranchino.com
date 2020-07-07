<template>
    <div class="prevnext">
        <div class="l">
            <nuxt-link  v-if="prevSlug" :to="prevSlug.path">← {{prevSlug.title}}</nuxt-link>
        </div>
        <div class="r">
            <nuxt-link  v-if="nextSlug" :to="nextSlug.path">{{nextSlug.title}} →</nuxt-link>
        </div>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
    
    computed:{
        ...mapGetters(['prevSlug', 'nextSlug']),

    },
    mounted(){
        document.addEventListener('keyup', this.onKey)
    },
    beforeDestroy(){
        document.removeEventListener('keyup', this.onKey)
    },
    methods:{
        onKey(e){
            let k = e.key
            if(this.prevSlug && k === 'ArrowLeft') this.$router.push(this.prevSlug.path)
            if(this.nextSlug && k === 'ArrowRight') this.$router.push(this.nextSlug.path)
        }
    }
}
</script>



<style scoped>
.prevnext{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size:70%;
    margin-top:2rem;
}

.prevnext > div{
    width: 100%;
    height: 100%;
    display: flex;
}
.prevnext > div a{
    padding: 1rem;
    display: block;
    background-color: white;
    height: 100%;
}
.l{
    text-align: left;
    margin-bottom:1rem;
}
.r{
    text-align: right;
}


@media screen and (min-width:420px){
    .prevnext{
        flex-direction: row;
    }
    .prevnext > div{
        width: 40%;
    }
    .l{
        margin-bottom:0rem;
    }
}
</style>