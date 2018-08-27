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
  mounted() {
    //do something after mounting vue instance
    if (localStorage.getItem('isLogin') === 'false') {
      this.$router.push('/')
    }
  }
  // methods: {
  //   ...mapActions([
  //     'getCustomers', 'getTransactions'
  //   ]),
  // },
}
</script>
