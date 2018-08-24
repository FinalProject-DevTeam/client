<template>
  <div class="headdashboard">
    <section class="hero is-info welcome is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hello, {{ this.name }}
          </h1>
          <h2 class="subtitle">
            I hope you are having a great day!
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: localStorage.getItem('name')
    }
  },
}
</script>

<style>

</style>
