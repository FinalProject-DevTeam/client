<template>
  <div class="detailcustomer">
    <Nav />

    <div class="container">
      <DetailPageCustomer />
    </div>
  </div>
</template>

<script>
import Nav from '../components/Header/Navbar.vue';
import DetailPageCustomer from '../components/UpdateCustomer/UpdatePageCustomer.vue';

export default {
  components: {
    Nav,
    DetailPageCustomer
  },
  mounted() {
    //do something after mounting vue instance
    if (localStorage.getItem('isLogin') === 'false') {
      this.$router.push('/')
    }
  }
};
</script>
