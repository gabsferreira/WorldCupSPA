import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import  { routes } from "./routes";

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter( { routes });

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
el: '#app',
router,
render: h => h(App)
})
