<template>
    <div id="__default" class="main">
        <!-- <a href="https://github.com/abusedmedia/Ukraine-support-banner" style="position:fixed;width:300px;right:0;top:0;transform:translate(80px,50px) rotate(45deg);z-index:999"><img style="width:100%;display:block;" src="https://daily.presenta.workers.dev/GhZD3MDlBN:yvLHzHJhJ"></a> -->
        <SidebarGlobal class="sidebar" />
        <div ref="body" class="body">
            <nuxt class="page" />
        </div>
    </div>
</template>


<script>
import SidebarGlobal from '~/components/SidebarGlobal.vue'

export default {
    
    components:{
        SidebarGlobal
    },
    watch: {
        '$route'(){
            this.$refs.body.scrollTop = 0
        }
    }
}
</script>



<style scoped>
.main{
    display: flex;
    flex-direction: column;
}

.body{
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 70px;

    background-color: var(--mainover);
}

.sidebar{
    position: fixed;
    width: 100%;
    z-index: 10;
}


@media screen and (min-width:420px) {
    .main{
        flex-direction: row;
    }

    .sidebar{
        width: 200px;
        min-width: 200px;
        height: 100%;
        overflow-y: auto;
    }

    .body{
        flex:1;
        width:100%;
        padding-left: 200px;
        margin-top: inherit;
    }
}




.page >>> a{
    font-family: 'Domain Display';
    color:var(--maincolor);
}

.page >>> a:hover{
    color:black
}


.page{
    font-size:140%;
    padding: 1rem;
    width: 100%;
}

.page >>> pre{
    font-size: 1rem;
    line-height: 1.2;
    background: var(--darkback);
}

.page >>> p code,
.page >>> li code{
    border:1px dashed var(--maincolor);
    padding: .2rem;
    font-size:75%;
    white-space: nowrap;
}

.page >>> p {
        line-height: 140%;
}

.page >>> img{
    width: 100%;
}

.page >>> iframe{
    width: 100%;
    height: 300px;
    border: none;
}

.page >>> video{
    width: 100%;
}

.page >>> blockquote{
    font-size:170%;
    background-color: #fff;
    padding: 1rem;
    margin: 0;
    margin-top: 1.5rem;
    color:var(--altover);
    font-family: 'Domain Display Bold';
    border-radius: 6px;
    box-shadow: 0px 0px 10px #ccc;
}
.page >>> blockquote p{
    margin: 0;
    line-height: 95%;
}

.page >>> blockquote a{
    color: var(--maincolor);
}

.page >>> ul,
.page >>> ol {
  font-size: 1.15em;
  line-height: 1.1em;
  text-align: left;
  margin: 0;
  padding: 0;
  list-style-type: none;
  counter-reset: li;
  padding: 0.5rem 0;
}

.page >>> li{
  padding: 0.25rem 0;
  list-style-position:inside;
  margin-bottom: 2px;
  padding: .25em;
  padding-left: 0.8em;
}
.page >>> ul li::before {
  content: "–"; 
  display: inline-block; 
  width: 0.8em;
  margin-left: -0.8em;
  color: var(--maincolor);
}
.page >>> ol li::before {
  counter-increment: li;  
  content:  "." counter(li); 
  display: inline-block; 
  width: 1.1em; 
  margin-left: -1.3em;
  margin-right: 0.2em; 
  text-align: right; 
  direction: rtl;
}

.page >>> li p{
  display: inline;
}

.page >>> hr{
    border:none;
    border-bottom:1px solid var(--maincolor);
}

@media screen and (min-width:420px){
    .page.reader{
       width: 100%;
    }
}

@media screen and (min-width:760px){
    .page.reader{
        width: 90%;
    }
}
@media screen and (min-width:1150px){
    .page.reader{
        width: 80%;
    }
}
@media screen and (min-width:1350px){
    .page.reader{
        width: 75%;
    }
}
</style>