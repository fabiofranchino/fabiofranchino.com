<template>
    <div class="mini">
        Spotted a typo? 
        <a :href="editLink" target="_blank">Send a patch</a>
        <br />
        Want to comment? <strong>Reach me out on</strong>
        <a href="https://twitter.com/fabiofranchino" target="_blank">Twitter</a>
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
    font-size: 1rem;
    padding: 1rem;
}
</style>