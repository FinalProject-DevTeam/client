<template>
  <div class="promos">
    <Nav/>
    <Promo/>
  </div>
</template>

<script>
import Promo from '../components/Promo.vue';
import Nav from '../components/Navbar.vue';

export default {
  components: {
    Promo,
    Nav
  },
};
</script>
