<template>
  <div class="promos">
    <Nav/>
    <Promo/>
  </div>
</template>

<script>
import Promo from '../components/Promo/Promo.vue';
import Nav from '../components/Header/Navbar.vue';

export default {
  components: {
    Promo,
    Nav
  },
};
</script>
