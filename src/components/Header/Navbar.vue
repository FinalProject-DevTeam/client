<template>
  <div class="navbars">
    <section class="hero is-info is-large">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
              <span></span>
              <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item">
                  <router-link to='/dashboard'>
                    Home
                  </router-link>
                </a>
                <a class="navbar-item">
                  <router-link to='/customer'>
                    Customer
                  </router-link>
                </a>
                <a class="navbar-item">
                  <router-link to='/transaction'>
                    Transaction
                  </router-link>
                </a>
                <a class="navbar-item">
                  <router-link to='/promo'>
                    Promo
                  </router-link>
                </a>
                <a class="navbar-item" @click="setLogOut">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'navbars',
  methods: {
    ...mapActions([
      'logOut'
    ]),
    setLogOut() {
      this.logOut()
    }
  }
};
</script>

<style scoped>
  .hero {
    margin-bottom: 20px;
    background: linear-gradient(to right, #5B86E5, #36D1DC);
  }
</style>
