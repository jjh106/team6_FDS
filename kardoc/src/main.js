import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import App from './App.vue'
import axios from 'axios'

Vue.use(VueRouter);

Vue.prototype.$http = axios


const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
