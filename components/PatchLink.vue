<template>
    <div class="mini">

        Want to interact? <strong>Reach me out on</strong>
        <a href="https://twitter.com/fabiofranchino" target="_blank">Twitter</a>
        
        <br />

        Spotted a typo? 
        <a :href="editLink" target="_blank">Send a patch</a>
        
    </div>
</template>


<script>
export default {
    props:{
        editLink:String
    }
}
</script>


<style scoped>
.mini{
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem;
    margin-top: 1rem;
}
</style>