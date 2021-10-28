<template>
    <div class="card">
        <div class="inner">
            <nuxt-link :to="item.path + '/'">
                <h4>{{item.title}}</h4>
                <p>{{item.humandate}}</p>
            </nuxt-link>
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
    padding: .5rem;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    
}
.card .inner{
    padding: .75rem;
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

.card:hover{
    transform: scale(1.08);
}
.card:hover .inner{
    background: #333;
}
.card:hover *{
    color:white!important;
}

@media screen and (min-width:760px){
    .card{
        width: 50%;
    }
}

@media screen and (min-width:960px){
    .card{
        width: 33.333333333333333%;
    }
}

@media screen and (min-width:1150px){
    .card{
        width: 25%;
    }
}
</style>