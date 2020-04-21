import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip=false

new Vue({
    
    el:'App',
    router,
    template:'<App/>',
    components: {App}
})