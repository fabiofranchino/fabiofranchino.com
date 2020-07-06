<template>
    <div class="subscribe">
        <h4>Get occasional updates:</h4>
        <input type="email" v-model="email" placeholder="your@email.com + ENTER"/>
    </div>
</template>



<script>
export default {
    data(){
        return{
            email:''
        }
    }
}
</script>



<style scoped>
.subscribe{
    padding: 1rem;
    border: 1px dashed var(--maincolor);
    margin-top:2rem;
}
h4{
    margin: 0;
    padding: 0;
    border:none;
    padding: .3rem;
}
input{
    width: 100%;
    border: none;
    border: 1px solid #eee;
    padding:.5rem;
}
</style>