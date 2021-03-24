<template>
    <div class="project">
        <div class="inner">

            <div class="mediacnt">
                <div class="img">
                    <img :src="imagePath" />
                </div>
                <div class="vid" v-if="project.video && showInfo">
                    <video loop autoplay muted :src="videoPath" ></video>
                </div>
            </div>
            

            <div class="content">
                <div class="info">
                    <h3>{{project.title}}</h3>
                    <p v-html="project.brief"></p>
                    <p class="tags" v-html="getTags(project.tags)"></p>
                    <p class="roles" v-html="getTags(project.roles)"></p>
                </div>
                <div class="foot" v-if="project.more">
                    <!-- <p class="link" v-if="project.link"><a rel="noreferrer" target="blank" :href="project.link">Go to Project</a></p> -->
                    <p class="link"><a target="blank" href="" @click.prevent="showInfo=true">Please More!</a></p>
                </div>

                <transition name="slide">
                    <div v-if="showInfo" class="moreinfo" @click="showInfo=false">
                        <div class="cnt" v-html="project.more"></div>
                    </div>
                </transition>
            </div>

            
        </div>
    </div>
</template>



<script>
export default {
    props:{
        project:Object
    },
    data(){
        return{
            showInfo:false
        }
    },
    computed:{
        imagePath(){
            return process.env.NUXT_ENV_ASSETS_CDN + '/' + this.project.image
        },
        videoPath(){
            return process.env.NUXT_ENV_ASSETS_CDN + '/' + this.project.video
        }
    },
    methods:{
        getTags(arr){
            let str = ''
            
            if(arr){
                arr.forEach(t => {
                    str += `<span>${t}</span>`
                })
            }

            return str
        }
    }
}
</script>


<style scoped>



h3, p{
    margin:0;
}


p{
    font-size: 1rem;
    padding-top: 0.5rem;
}

.project{
    width: 100%;
    padding: 1rem;
}


.inner{
    background: white;
    height: 100%;
    box-shadow: 0 0 10px #ddd;
    display: flex;
    flex-direction: column;
    
}


.content{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.mediacnt{
    position: relative;
    width: 100%;
    min-height: 200px;
}
.mediacnt > div{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
}


img, video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.info{
    flex:1;
    padding: 1rem;
}

.foot{
    padding: .5rem;
    padding-top: 0;
    font-size: .8rem;
}

.tags, .roles{
    display: flex;
    flex-wrap: wrap;
}

p.link{
    text-align: center;
}

.tags >>> span,
.roles >>> span{
    color: var(--darkback);
    background-color: #eee;
    border-radius: 8px;
    margin-right: 0.3rem;
    padding: .1rem .5rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
}
.roles >>> span{
    background-color: var(--maincolora);
    color: var(--darkback);
}

.moreinfo{
    position: absolute;
    top:0;
    left:0;
    background-color: var(--darkback);
    width: 100%;
    height: 100%;
}

.moreinfo .cnt{
    color: white;
    font-size: 1.1rem;
    padding: 0 1rem;
    line-height: 1.5rem;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    cursor: pointer;
}

.cnt >>> a:hover{
    color: white;
}

.cnt::-webkit-scrollbar {
  width: 8px;
  height:8px;
  background-color: unset; 
}
.cnt::-webkit-scrollbar-thumb {
  background: var(--maincolor);
  border-right: 1px solid white;
}

.moreinfo::before,
.moreinfo::after{
    content:'';
    width: calc(100% - 8px);
    height: 30px;
    background: linear-gradient(0deg, rgba(0,0,0,0), var(--darkback));
    position: absolute;
    left:0;
}
.moreinfo::after{
    background: linear-gradient(0deg, var(--darkback), rgba(0,0,0,0));
    bottom:0;
}

.slide-enter-active, .slide-leave-active{
    transition: transform 0.4s cubic-bezier(.9, .1, .1, .9);
}
.slide-enter, .slide-leave-to{
    transform:translate(0,100%);
}


@media screen and (min-width:760px){
    .project{
        width: 50%;
    }
}

@media screen and (min-width:1150px){
    .project{
        width: 33.333333333333333%;
    }
}

</style>