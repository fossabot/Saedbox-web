import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)

import auth from './utils/auth'

import App from './components/App.vue'

import Login from './components/Login.vue'
import Home from './components/Containers.vue'

require('font-awesome-loader');

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', name: 'containers', component: Home, beforeEnter: requireAuth },
    { path: '/', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }}
  ]
})

new Vue({
  el: '#app',
  router,
  // replace the content of <div id="app"></div> with App
  render: h => h(App)
})
