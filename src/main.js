import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
Vue.use(VueRouter)

import auth from './utils/auth'

import App from './components/App.vue'

import Login from './components/Login.vue'
import Home from './components/Containers.vue'

require('font-awesome-loader');

function requireAuth (to, from, next) {
    auth.checkAuth(function(response){
        if (!response){
            next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }
        else {
          next()
        }
    })
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'containers', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
