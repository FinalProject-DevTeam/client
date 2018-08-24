import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Customer from './views/CustomerPage.vue';
import Transaction from './views/TransactionPage.vue';
import Promo from './views/PromoPage.vue';
import DetailCustomer from './views/DetailCustomer.vue'
import TransactionUpdate from './views/EditTransactionPage.vue'


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
      path: '/transaction/:id',
      name: 'transactionupdate',
      component: TransactionUpdate
    },
    {
      path: '/promo',
      name: 'promo',
      component: Promo
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: Transaction
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import (/* webpackChunkName: "about" */
      './views/Dashboard.vue')
    },
    {
      path: '/detailCustomer/:id',
      name: 'detailcustomer',
      component: DetailCustomer
    },
  ]
})
