<template>
    <div class="page">
        <div class="body">
            <div class="content">{{url}}</div>
        </div>
    </div>
</template>




<script>
export default {
    async asyncData({ params, error }) {
        let res = null

        try{
            res = await import(`~/content/tips.json`)
        }catch(err){
            error({message: 'Tip List not found'})
        }
        
        let url = res.default.find(d => d.url === 'blog/tips/' + params.id)
        console.log('blog/tips/' + params.id, url, res.default)
        if(!url) error({message: 'Tip not found'})

        return {
            url: url
        }
    },
    computed:{
        
    }
}
</script>



<style scoped>
.page{
    display: flex;
}
</style>