<template>
<div class="dashboard">
  <Nav />
  <HeadDashboard />
  <br>
  <Dashboard />
</div>
</template>

<script>
// import {
//   mapState,
//   mapActions
// } from 'vuex';

import Nav from '../components/Header/Navbar.vue';
import HeadDashboard from '../components/Dashboard/HeadDashboard.vue';
import Dashboard from '../components/Dashboard/Dashboard.vue';

export default {
  components: {
    Nav,
    HeadDashboard,
    Dashboard
  },
  // created() {
  //   console.log('get')
  //   this.getCustomers();
  //   this.getTransactions();
  // },
  // methods: {
  //   ...mapActions([
  //     'getCustomers', 'getTransactions'
  //   ]),
  // },
}
</script>
