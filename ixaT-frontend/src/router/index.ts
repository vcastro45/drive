import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/options',
      name: 'Options',
      component: Home
    }
    ,
    {
      path: '/account',
      name: 'Account',
      component: Home
    }
  ]
})
