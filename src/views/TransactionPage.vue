<template>
  <div class="transaction">
    <Nav/>
    <Transactionpage/>
  </div>
</template>

<script>
import Transactionpage from '../components/Transaction.vue'
import Nav from '../components/Navbar.vue'

export default {
  components: {
    Transactionpage,
    Nav
  },

}
</script>
