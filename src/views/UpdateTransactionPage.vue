<template>
<div class="edit">
  <Nav/>
  <UpdateTransactionPage/>
</div>
</template>

<script>
import Nav from '../components/Header/Navbar.vue';
import UpdateTransactionPage from '../components/UpdateTransaction/UpdateTransaction.vue'

export default {
  components: {
    Nav,
    UpdateTransactionPage
  },
};
</script>
