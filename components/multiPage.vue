<template>
    <div class="multiPage">
        <event-listener @bouge="bouge($event)" >
            <div class="multiPageContainer">
                <slot></slot>
            </div>
        </event-listener>
    </div>
</template>

<script>
var eventListener = require('../components/eventListener.vue');

module.exports ={
    props: {
    },
    data: () => ({
        pages: [],
        position: 0,
        length: 0
    }),
    created() {
    },
    mounted() {
        this.balise = this.$el;     // Mouerf allez, c'est moche $el
        this.width = this.balise.firstChild.clientWidth;        
        this.pages = this.$children[0].$children;    // cherche le contenu du slot
        this.length = this.pages.length;
    },
    methods: {
        bouge(direction){
            this.position-=direction;   // Pas inteligent le sens inverse (compliuqe le test ci dessous)
            if (this.position <= -this.length) this.position = 0;
            if (this.position > 0) this.position = -this.length + 1;
            this.balise.style.transform = "translateX("+(this.width*this.position) +"px)";            
        }
    },
    components:{
        eventListener
    }
}
</script>

<style>
.multiPage {
    width: 20000px;
    height: 100%;
    overflow: hidden;
    transition: transform .2s;
}

.multiPageContainer {
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
}
</style>
