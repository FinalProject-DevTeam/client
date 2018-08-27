<template>
<div class="promos">
  <Nav/>
  <Promo/>
</div>
</template>

<script>
import Promo from '../components/Promo/EmailPromo.vue';
import Nav from '../components/Header/Navbar.vue';

export default {
  components: {
    Promo,
    Nav
  },
  mounted() {
    //do something after mounting vue instance
    if (localStorage.getItem('isLogin') === 'false') {
      this.$router.push('/')
    }
  },
};
</script>
