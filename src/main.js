import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './components/App.vue'

import Login from './components/Auth.vue'
import Home from './components/Home.vue'

require('font-awesome-loader');

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/', component: Login }
  ]
})

new Vue({
  el: '#app',
  router,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
})
