<template>
<div class="transaction">
  <Nav/>
  <Transactionpage/>
</div>
</template>

<script>
import Transactionpage from '../components/Transaction/Transaction.vue';
import Nav from '../components/Header/Navbar.vue';

export default {
  components: {
    Transactionpage,
    Nav
  },
  mounted() {
    //do something after mounting vue instance
    if (localStorage.getItem('isLogin') === 'false') {
      this.$router.push('/')
    }
  },

};
</script>
