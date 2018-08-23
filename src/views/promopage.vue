<template>
<div class="promos">
  <Nav/>
  <Promo/>
</div>
</template>

<script>
import Promo from '../components/promo.vue'
import Nav from '../components/navbar.vue'
export default {
  components: {
    Promo,
    Nav
  },

}
</script>
