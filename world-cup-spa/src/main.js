import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
el: '#app',
render: h => h(App)
})
