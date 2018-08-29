<template>
<div class="smspromo">
  <Nav/>
  <SmsPromo/>
</div>
</template>

<script>
import SmsPromo from '../components/Promo/SmsPromo.vue';
import Nav from '../components/Header/Navbar.vue';

export default {
  components: {
    SmsPromo,
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
