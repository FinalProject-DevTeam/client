<template>
<div class="edit">
  <Nav/>
  <EditPage/>
</div>
</template>

<script>
import Nav from '../components/Navbar.vue';
import EditPage from '../components/EditTransaction.vue'

export default {
  components: {
    Nav,
    EditPage
  },
};
</script>
