<template>
    <div >
        <div class="topMenu">
            <div class="titleMenu">
                {{title}}
            </div>
        </div>
        <multiPage>
            <page title="toto">test</page>
            <page title="titi">
                <multiPage>
                    <page title="toto">test</page>
                    <page title="titi">
                        Ca marche !!!
                    </page>
                    <page title="tutu">dfdfgsgd</page>
                </multiPage>
            </page>
            <page title="tutu">dfdfgsgd</page>
        </multiPage>
    </div>   
</template>

<script>
    var multiPage = require('../components/multiPage.vue');
    var page = require('../components/page.vue');
    var chooser = require('../components/chooser.vue');

    module.exports ={
        data: function(){
            return {
                title: "Copro-Syldave"
            }
        },
        components:{
            page,
            multiPage,
            chooser
        }
    }
</script>

<style>
</style>