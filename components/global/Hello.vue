<template>
    <div>
        <h1>hell {{counter}}</h1>
    </div>
</template>



<script>
export default {
    data(){
        return{
            counter:0
        }
    },
    mounted(){
        setInterval(() => {
            this.counter++
        }, 1500)
    }
}
</script>