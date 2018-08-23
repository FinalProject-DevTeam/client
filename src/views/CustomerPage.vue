<template>
  <div class="customer">
    <Nav/>
    <Customer/>
  </div>
</template>

<script>
import Customer from '../components/Customer.vue';
import Nav from '../components/Navbar.vue';
export default {
  components: {
    Customer,
    Nav
  },
};
</script>
