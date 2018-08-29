<template>
  <div class="updatetransaction">
    <Nav/>
    <UpdateTransactionPage/>
  </div>
</template>

<script>
import Nav from '../components/Header/Navbar.vue';
import UpdateTransactionPage from '../components/UpdateTransaction/UpdateTransaction.vue';

export default {
  components: {
    Nav,
    UpdateTransactionPage
  },
  mounted() {
    //do something after mounting vue instance
    if (localStorage.getItem('isLogin') === 'false') {
      this.$router.push('/')
    }
  },
};
</script>
