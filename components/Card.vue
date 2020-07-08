<template>
    <div class="card">
        <div class="inner">
            <!-- <nuxt-link :to="item.path"> -->
                <a :href="item.path">
                <div class="img">
                    <img loading="lazy" :src="item.cover" v-if="item.cover" />
                </div>
                <h4>{{item.title}}</h4>
                <p>{{item.humandate}}</p>
                </a>
            <!-- </nuxt-link> -->
        </div>
    </div>
</template>


<script>
export default {
    props:{
        item:Object
    }
}
</script>



<style scoped>

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
    margin: 0;
}

.card p{
    font-family: inherit;
    font-size:50%;
    font-family: 'Founter Grotest';
    margin: 0;
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
    margin-bottom: 1rem;
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