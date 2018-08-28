<template>
  <div class="customer">
    <Nav/>
    <Customer/>
  </div>
</template>

<script>
import Nav from '../components/Header/Navbar.vue';
import Customer from '../components/Customer/Customer.vue';

export default {
  components: {
    Customer,
    Nav
  },
  mounted() {
    //do something after mounting vue instance
    if (localStorage.getItem('isLogin' === 'false')) {
      this.$router.push('/')
    }
  }
};
</script>
