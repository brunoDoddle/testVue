<template>
    <div >
        <!-- Si on a un titre on met une en-tête -->
        <div class="topMenu" v-if="title!=null">
            <div v-if="frereGauche" class="topLeft" @click="gauche()"></div>
            <div v-else class="topNull"></div>
            <div class="titleMenu">
                {{title}}
            </div>
            <div v-if="frereDroit" class="topRight" @click="droite()"></div>
            <div v-else class="topNull"></div>
        </div>
        <div class="main">
            <slot></slot>
        </div>
    </div>   
</template>

<script>
module.exports ={
    props: {
        title: null,
    },
    data: function(){
        return {
            frereDroit: false,
            frereGauche: false
        }
    },
    mounted() {
        if (this.$el.nextElementSibling != null) this.frereDroit = true;
        if (this.$el.previousElementSibling != null) this.frereGauche = true;
    },
    model: {
        event : "bouge"
    },
    methods: {
        gauche(event){
            this.$parent.$emit("bouge",-1);
            event.preventDefault();

        },
        droite(event){
            this.$parent.$emit("bouge",1);
            event.preventDefault();
        }
    }
}
</script>

<style scoped>

</style>
