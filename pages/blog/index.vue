<template>
    <div>
        <div class="post-header">
        </div>

        <div class="container">
            <div class="card" v-for="item in posts" :key="item.path">
                <div class="inner">
                    <nuxt-link :to="item.path">
                        <div class="img">
                            <img :src="getCover(item)" v-if="item.cover" />
                        </div>
                        <h4>{{item.title}}</h4>
                        <p>{{toDate(item.date)}}</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
       
    </div>
</template>



<script>
export default {
    head () {
        return {
            title: 'Blog posts'
        }
    },
    methods:{
        toDate(_date){
            let date = new Date(_date)
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString(undefined, options)
        },
        getCover(item){
            return`assets/posts/${item.slug}/${item.cover}`
        }
    },
    async asyncData({ store, $content, params, error }) {
        let res = await $content('blog').sortBy('date', 'desc').fetch()
        
        store.commit('setRelated', null)
        return {
            posts: res
        }
    }
}
</script>




<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
}

.card{
    width: 100%;
    text-align: center;
    padding: .5rem;
    
}
.card .inner{
    padding: .5rem;
    background-color: white;
    box-shadow: 0 0 10px #ddd;
    height: 100%;
}
.card h4{
    border: none;
    padding: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    flex:1;
    color: #333;
}

.card p{
    font-family: inherit;
    font-size:50%;
    font-family: 'Founter Grotest';
}

.card a{
    color: #333;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card .img {
    overflow: hidden;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
}
.card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (min-width:760px){
    .card{
        width: 50%;
    }
}

@media screen and (min-width:1150px){
    .card{
        width: 33.333333333333333%;
    }
}
</style>