<template>
    <div >
        <div class="topMenu" >
            <div class="titleMenu">
                {{title}}
            </div>
        </div>
        <div class="main">
            <event-listener @recupere="recupere($event)" >
                <ul>
                    <li v-for="objet in liste" v-bind:key="objet">
                        <div class="objet" @click="action(objet.lot,$event)">
                            {{objet.nom}}
                        </div>
                    </li>
                </ul>
            </event-listener>
        </div>
    </div>   
</template>

<script>
var eventListener = require('../components/eventListener.vue');

module.exports ={
    props: {
        title: null,
    },
    data: function(){
        return {
            liste: [{nom:"",type:"",lot:"",pc1:"",pc2:"",pc3:"",pc4:""}]   
        }
    },
    mounted() {
    },
    model: {
        event : "envois"
    },    
    methods: {
        action(lot,event){  // On a cliqué sur l'evt
            // retrouver le lot
            var trouve = -1;
            liste.forEach((element,position) => {
                if (element.lot == lot) trouve = position;
            });

            if (trouve!=-1) this.$parent.$emit("envois",liste.splice(trouve,1));
            event.preventDefault();
        },
        recupere(event){
            list.push(event);
        }
    }
}
</script>

<style scoped>
    .objet {
        width: 100%;
        color: black;
        border: 1px solid black;
    }
</style>