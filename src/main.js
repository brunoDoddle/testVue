var Vue = require('vue');
var Vuex = require('vuex'); //ajout du store vueX
// var Vuetify = require('vuetify');

Vue.use(Vuex);
// Vue.use(Vuetify)

// Mes composants perso 
var application = require('../components/application.vue');

// Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
})

var app = new Vue({
    el: 'application',
    store,  //On passe le store au composant vue
    render: (createElement) => createElement(application),   //render du composant oneFile
  }
)