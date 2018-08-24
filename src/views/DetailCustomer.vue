<template>
  <div class="detailcustomer">
    <Nav />
    <DetailPageCustomer />
  </div>
</template>

<script>
import Nav from '../components/Navbar.vue';
import DetailPageCustomer from '../components/DetailCustomer/DetailPageCustomer.vue';

export default {
  components: {
    Nav,
    DetailPageCustomer
  }
};
</script>

<style>

</style>
