<template>
    <div class="search">
        <input type="search" v-model="search" placeholder="search a term" />
    </div>
</template>



<script>
export default {
    props:{
        source:Array
    },
    data(){
        return{
            search:''
        }
    },
    watch:{
        search(){
            this.$emit('results', this.results)
        }
    },
    computed:{
        results(){
            let res = this.source
            if(this.search){
                let src = this.search.toLowerCase()
                res = this.source.filter(d => {
                    let tit = d.title.toLowerCase()
                    return tit.indexOf(src) >= 0
                })
            }
            return res
        }
    }
}
</script>



<style scoped>
.search{
    margin-top:1rem;
    padding: 0 .5rem;
    display: flex;
}
input{
    border:1px solid #eee;
    padding:1rem;
    width: 100%;
}
</style>