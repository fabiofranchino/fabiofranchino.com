<template>
    <div class="wrapper">

        <header>
            <div class="logo">
                <nuxt-link :to="'/'">FF</nuxt-link>
            </div>
            <div class="ham" @click="panelVisible=!panelVisible">
                <div></div>
                <div></div>
            </div>
        </header>
        
        <section :class="panelClass">

            <div v-if="related">
                <h3>Related:</h3>
                <ul>
                    <li v-for="item in related" :key="item.path">
                        <nuxt-link :to="item.path">{{item.title}}</nuxt-link>
                    </li>
                </ul>
            </div>

            <h3>Discover:</h3>
            <ul>
                <li>
                    <nuxt-link :to="'/blog'">Articles</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="'/tip'">Tips</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="'/log'">Logs</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="'/'">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="'/'">Home</nuxt-link>
                </li>
            </ul>

            
           
        </section>

        <footer>
            2020 @ Fabio Franchino
        </footer>
        
    </div>
</template>



<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            panelVisible:false
        }
    },
    
    computed:{
        ...mapGetters(['related']),
        panelClass(){
            return {visible: this.panelVisible}
        }
    }
}
</script>



<style scoped>
.wrapper{
    background-color: #333333;
    padding: .5rem;
    display: flex;
    flex-direction: column;
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.ham div{
    width: 20px;
    margin: 10px 5px;
    border-bottom:1px solid var(--mainover);
}


.logo{
    display: flex;
}
.logo > a{
    text-decoration: none;
    font-family: 'Domain Display Black';
    border:3px solid var(--maincolor);
    color: var(--mainover);
    padding:.5rem;
}

section{
    display: none;
    color: var(--mainover);
    margin-top:1rem;
    flex:1;
}

section.visible{
    display: block;
}

ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
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



footer{
    color:var(--mainover);
    font-size:80%;
    display: none;
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




</style>



