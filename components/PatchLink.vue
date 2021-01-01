<template>
    <div class="mini">
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
    font-size: 1rem;
    padding: 1rem;
}
</style>