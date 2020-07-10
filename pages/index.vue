<template>
    <div class="reader">
        <nuxt-content :document="page" />
    </div>
</template>


<script>

import { annotate, annotationGroup } from 'rough-notation';

export default {
    head () {
        return {
            title: this.title
        }
    },
    async asyncData({ $content, params, error }) {
        let page = await $content('home').fetch()
        const title = page.title
        return {
            page,
            title
        }
    },
    mounted(){
        this.$store.commit('setRelated', null)
        setTimeout(() => {
            this.rough()
        }, 1000)
        
        
    },
    methods:{
        rough(){
            const elems = this.$el.querySelectorAll('.s')
            const annarr = []
            const arr = [].slice.call(elems).forEach(e => {
                let c = e.dataset.color || 'var(--maincolor)'
                const ann = annotate(e, { 
                    animationDuration:400,
                    type: e.dataset.type, 
                    color: c })
                annarr.push(ann)
            })
            const g = annotationGroup(annarr)
            g.show()
        }
    }
}
</script>


<style scoped>
.reader >>> h2{
    margin-top: 1rem;
}

.reader >>> .s{
    font-weight: bold;
}
</style>