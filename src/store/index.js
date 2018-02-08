import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import other from './modules/other'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        permission,
        other
    },
    getters
})

export default store