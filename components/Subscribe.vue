<template>
    <div class="subscribe">
        <div v-if="status === 'start'">
            <h4>Get occasional updates:</h4>
            <input type="email" @keyup.enter="onConfirm" v-model="email" placeholder="your@email.com + ENTER"/>
        </div>
        <div v-if="status === 'progress'">
            Submitting... wait a bit.
        </div>
        <div v-if="status === 'done'">
            Thanks!
        </div>
        <div v-if="status === 'error'">
            There was an error, sorry.  {{message}}
        </div>
    </div>
</template>



<script>
import axios from 'axios'

export default {
    data(){
        return{
            email:'',
            status: 'start',
            message:''
        }
    },
    computed:{
        isValid(){
            if (!this.email) return false
            var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g
            var match = this.email.match(regExp)
            return match
        }
    },
    methods:{
        async onConfirm(){
            if(!this.isValid) return

            let ref = this.$route.path
            
            let res = null
            this.status = 'progress'

            try{
                res = await axios({
                    method:'GET',
                    url: process.env.NUXT_ENV_LAMBDA_MAILCHIMP + '?m=' + this.email
                })
            }catch(err){
                this.message = err
            }

            if(res && res.status === 200){
                this.status = 'done'
            }else{
                this.status = 'error'
                this.message = res.message
            }


        }
    }
}
</script>



<style scoped>
.subscribe{
    padding: 1rem;
    border: 1px dashed var(--maincolor);
    margin-top:2rem;
}
h4{
    margin: 0;
    padding: 0;
    border:none;
    padding: .3rem;
}
input{
    width: 100%;
    border: none;
    border: 1px solid #eee;
    padding:.5rem;
}
</style>