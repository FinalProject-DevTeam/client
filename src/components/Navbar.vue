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
              <a class="navbar-item is-active">
                Home
              </a>
              <a href="/customer" class="navbar-item">
                Customer
              </a>
              <a href="/transaction" class="navbar-item">
                Transaction
              </a>
              <a href="/promo" class="navbar-item">
                Promo
              </a>
              <a class="navbar-item">
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
export default {
  name: 'navbars',

}
</script>
<style scoped>
.hero {
  margin-bottom: 20px
}
</style>
