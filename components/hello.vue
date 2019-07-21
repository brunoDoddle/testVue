<template>
    <div>
        <h1> ---- {{ greeting }} ---- </h1>
        <h2> {{ count }} </h2>
        <button v-on:click="change">click</button>
    </div>
</template>

<script>
    module.exports ={
        data: function(){
            return {
                greeting: "Salut les kneckes!!"
            }
        },
        computed: {
            count() {
                return this.$store.state.count;
             }
        },
        methods: {
            change: function(event){
                this.$store.commit('increment');  //appel du mutateur du store...
            }
        }
    }
</script>

<style>
    h1 {
        color: green;
        font-size: 10px;
    }
</style>
