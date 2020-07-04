<template>
    <div>
        <h1>{{n}}</h1>
    </div>
</template>



<script>
export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        
        let n = Math.random()

        if(n > 0.5){
            error({message:'Dang!'})
        }

        return {n}
    }
}
</script>