import Vue from 'vue'
import App from './App.vue'
import router from './router/permission'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import customComponents from './custom-components.js'

import './styles/index.css'
import './styles/index.less'
import './utils/iconfont'

Vue.use(ElementUI)
Vue.use(customComponents)

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})