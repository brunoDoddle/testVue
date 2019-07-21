<template>
    <div >
        <div class="demi">
            <liste titre="toto"></liste>
        </div>
        <div class="demi">
            <liste titre="titi"></liste>
        </div>
    </div>   
</template>

<script>
var liste = require('../components/liste.vue');

module.exports ={
    methods: {
    },
    components:{
        liste
    }
}
</script>

<style scoped>
    .demi {
        width: 100%;
        height: 50%;
    }
</style>