<template>
<div class="customer">
  <Nav/>
  <Customer/>
</div>
</template>

<script>
import Customer from '../components/customer.vue'
import Nav from '../components/navbar.vue'
export default {
  components: {
    Customer,
    Nav
  },

}
</script>
