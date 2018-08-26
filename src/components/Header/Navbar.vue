<template>
<div class="navbars">
  <section class="hero is-info is-large">

    <div class="hero-head">

      <nav class="navbar is-transparent">
        <div class="container">
          <div class="navbar-brand">
            <a>
              <h1>RIKA</h1>
              <!-- <img class="atur" src="https://lh6.googleusercontent.com/gjqnkrHZnA64h2KqXSNp9BW_8a5aUhKTKdfjqQTC2NjynX1HOxRPa5MzWl6oGIrXjJXWawp5Jc5IOzcuh8Ww=w2860-h1564"/> -->
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroB">

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
                <router-link to='/learn'>
                  Learn
                </router-link>
              </a>
              <a class="navbar-item">
                <router-link to='/emailpromo'>
                  Email
                </router-link>
              </a>
              <a class="navbar-item">
                <router-link to='/smspromo'>
                  SMS
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
import {
  mapActions
} from 'vuex';

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
.navbars .navbar {
  box-shadow: 0 8px 6px -6px black;
  height: 80px;
}

.atur {
  height: 100px;
  width: auto
}

.navbar-menu a {
  font-weight: 700;
  line-height: 30px;
}

.hero {
  margin-bottom: 20px;
  background: linear-gradient(to right, #5B86E5, #36D1DC);
}
</style>
