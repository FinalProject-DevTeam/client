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
};
</script>
