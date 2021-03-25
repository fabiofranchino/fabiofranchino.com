<template>
    <div>
        <div class="header">
            <h1>Showcase!</h1>
            <h3>Projects I've been in charge for one reason or another.</h3>
        </div>

        <div v-for="section in projects" :key="section.title">
            <div class="header">
                <h2>{{section.title}}</h2>
                <p v-html="section.desc"></p>
            </div>

            <div class="container">
                <Project :project="project" v-for="project in section.projects" :key="project.title" />
            </div>
        </div> 

        <div class="header">
            <div class="container">
                <Stats></Stats>
            </div>
        </div>

         
    </div>     
</template>



<script>
import Project from '@/components/Project'
import projects from '../../libs/projects.js'

export default {
    components:{
        Project
    },
    head () {
        return {
            title: 'Showcase',
            meta: [
                { hid:'robots', name: 'robots', content: 'noindex' }
            ]
        }
    },
    async asyncData({ store, $content, params, error }) {
        const p = params.id
        return {
            projects
        }
    }
}
</script>




<style scoped>
.header{
    padding: 0 1rem;
}
.container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
}

h1{
    margin: 0;
}
h3{
    padding: 0;
    margin: 0;
    border: none;
}


</style>