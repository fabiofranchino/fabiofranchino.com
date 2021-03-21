<template>
    <div class="project">
        <div class="inner">
            <div class="img">
                <img :src="'/' + project.image" />
            </div>
            <div class="info">
                <h3>{{project.title}}</h3>
                <p>{{project.brief}}</p>
                <p class="tags" v-html="getTags(project.tags)"></p>
                <p class="roles" v-html="getTags(project.roles)"></p>
            </div>
            <div class="foot">
                <p class="link" v-if="project.link"><a rel="noreferrer" target="blank" :href="project.link">Go to Project</a></p>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    props:{
        project:Object
    },
    methods:{
        getTags(tags){
            let str = ''
            
            if(tags){
                tags.forEach(t => {
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

.img{
    height: 200px;
}

img{
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