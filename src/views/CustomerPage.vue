<template>
  <div class="customer">
    <Nav/>
    <Customer/>
  </div>
</template>

<script>
import Nav from '../components/Navbar.vue';
import Customer from '../components/Customer.vue';

export default {
  components: {
    Customer,
    Nav
  },
};
</script>
