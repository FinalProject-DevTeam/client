import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Customer from './views/CustomerPage.vue';
import Transaction from './views/TransactionPage.vue';
import EmailPromo from './views/PromoEmail.vue';
import DetailCustomer from './views/DetailCustomer.vue'
import TransactionUpdate from './views/UpdateTransactionPage.vue'
import Learn from './views/Learn.vue'
import SmsPromo from './views/PromoSms.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/transaction/:id',
      name: 'transactionupdate',
      component: TransactionUpdate
    },
    {
      path: '/emailpromo',
      name: 'emailpromo',
      component: EmailPromo
    },
    {
      path: '/smspromo',
      name: 'smspromo',
      component: SmsPromo
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
      './views/Dashboard.vue'),
      // redirect: to => {
      //   if(localStorage.getItem('isLogin') === 'false') {
      //     return { path: '/' }
      //   }
      // }
    },
    {
      path: '/detailCustomer/:id',
      name: 'detailcustomer',
      component: DetailCustomer
    },
  ]
})
