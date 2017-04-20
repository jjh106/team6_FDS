import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(VueRouter);


const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
