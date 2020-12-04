import Vue from 'vue'
import Vuex from 'vuex'
import planets from './modules/planets'
import rootStats from './modules/rootStats'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        planets,
        rootStats
    }
})