<template>
    <div id="__default">
        <HeaderGlobal />
        <nuxt />
        <FooterGlobal />
    </div>
</template>


<script>
import HeaderGlobal from '~/components/HeaderGlobal.vue'
import FooterGlobal from '~/components/FooterGlobal.vue'

export default {
    components:{
        HeaderGlobal,FooterGlobal
    }
}
</script>