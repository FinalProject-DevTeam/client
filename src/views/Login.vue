<template>
<div class="login">
  <Login/>
</div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  components: {
    Login
  },
  mounted() {
    //do something after mounting vue instance
    if (localStorage.getItem('isLogin') === 'true') {
      this.$router.push('/dashboard')
    }
  }
};
</script>
