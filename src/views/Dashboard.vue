<template>
  <div class="dashboard">
    <Nav />
    <HeadDashboard />
    <br>
    <Dashboard />
  </div>
</template>

<script>
import Nav from '../components/Header/Navbar.vue';
import HeadDashboard from '../components/Dashboard/HeadDashboard.vue';
import Dashboard from '../components/Dashboard/Dashboard.vue';

export default {
  components: {
    Nav,
    HeadDashboard,
    Dashboard
  }  
}
</script>

