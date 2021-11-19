<template>
    <div class="wrapper">

        <header>
            <div class="logo">
                <nuxt-link :to="'/'">
                    <span>FF</span>
                    <img src="@/assets/ff.jpg" />
                </nuxt-link>
            </div>
            <a class="ham" href="#menu">
                <div></div>
                <div></div>
            </a>
        </header>
        
        <section id="menu" class="visible">

            <div>
                
                <!-- <a class="banner" href="https://app.presenta.cc/f/redir/zGywhb2oJn:2wUi7fiQL">
                    <img width="100" height="100" src="https://app.presenta.cc/f/render/zGywhb2oJn:2wUi7fiQL/?w=100" />
                    Automation platform to generate PDF, PNG, GIF using a solid API and a Visual Editor.
                </a> -->
                <h3>Projects:</h3>
                <ul>
                    <li>
                        <a href="https://www.presenta.cc/lib">📜 PRESENTA Lib</a>
                    </li>
                </ul>
                
            </div>

            <div v-if="related">
                <h3>Related:</h3>
                <ul>
                    <li v-for="item in related" :key="item.path">
                        <nuxt-link :to="item.path + '/'">{{item.title}}</nuxt-link>
                    </li>
                </ul>
            </div>

            <h3>Discover:</h3>
            <ul>
                <li v-for="link in links" :class="getClass(link)" :key="link.url">
                    <nuxt-link :to="link.url">{{link.label}}</nuxt-link>
                </li>
            </ul>


            
           
        </section>

        <footer>
            <div class="socials">
                <a href="https://github.com/abusedmedia" title="Github" target="_blank"><img src="@/assets/github.svg" /></a>
                <a href="https://twitter.com/fabiofranchino" title="Twitter" target="_blank"><img src="@/assets/twitter.svg" /></a>
                <a href="/feed.xml" title="Feed RSS" target="_blank"><img src="@/assets/rss.svg" /></a>
            </div>
            <div>
                2017-21 @ Fabio Franchino
            </div>
        </footer>
        
    </div>
</template>



<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            links:[
                {url:'/blog/', label:'Articles'},
                {url:'/automation/', label:'Automation'},
                {url:'/log/', label:'Logs'},
                {url:'/tag/', label:'Tags'},
                //{url:'/resources', label:'Resources'},
                {url:'/about/', label:'About Me'},
            ]
        }
    },
    
    computed:{
        ...mapGetters(['related'])
    },
    
    methods:{
        getClass(link){
            let check = link.url
            let sel = this.$route.path.indexOf(check) === 0 || false
            return {selected: sel}
        }
    }
}
</script>



<style scoped>
.wrapper{
    background-color: var(--darkback);
    padding: .5rem;
    display: flex;
    flex-direction: column;
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.banner{
    width: 100%;
    display: flex;
    margin-top: 1rem;
    color: white;
    font-size:11px;
    text-decoration: none;
}
.banner img{
    border:1px solid #888;
    width: 100px;
    height: 100px;
    margin-right: 10px;
}

h3{
    margin-top: 1.5rem;
}

.ham div{
    width: 20px;
    margin: 10px 5px;
    border-bottom:1px solid var(--mainover);
}


.logo{
    display: flex;
    width:50px;
    height:50px;
}
.logo > a{
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-family: 'Domain Display';
    border:3px solid var(--maincolor);
    color: var(--mainover);
    overflow: hidden;
}
.logo span{
    padding: .2rem;
}
.logo img{
    width: 100%;
    display: none;
}

.logo:hover span{
    display: none;
}
.logo:hover img{
    display: block;
}

section{
    display: none;
    color: var(--mainover);
    margin-top:1rem;
    flex:1;
}
footer{
    margin-top:2rem;
    display: none;
}

:target.visible{
    display: block;
}


ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
li{
    margin-bottom:1px;
}
li a{
    display: block;
    text-decoration: none;
    color:var(--mainover);
    padding: .25rem;
}
li a:hover{
    color: var(--maincolor);
    background-color: var(--mainover);
}

li.selected a{
    color: var(--maincolor);
    background-color: var(--mainover);
}


footer{
    color:var(--mainover);
    font-size:80%;
    font-family: 'Domain Display';
}

@media screen and (min-width:420px){
    section{
        display: block;
    }

    .ham{
        display: none;
    }
    footer{
        display: block;
    }
}


.socials{
    display: flex;
}
.socials a{
    display: block;
    width: 20px;
    margin-right: .7rem;
    opacity: .5;
}
.socials a:hover{
    opacity: 1;
}
.socials img{
    width: 100%;
}

</style>



