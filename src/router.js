import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Customer from './views/customerpage.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
   {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import (/* webpackChunkName: "about" */
      './views/About.vue')
    }
  ]
})
