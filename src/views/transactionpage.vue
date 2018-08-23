<template>
<div class="transaction">
  <Nav/>
  <Transactionpage/>
</div>
</template>

<script>
import Transactionpage from '../components/transaction.vue'
import Nav from '../components/navbar.vue'
export default {
  components: {
    Transactionpage,
    Nav
  },

}
</script>
