<template>
<div class="headdashboard">
  <div class="container">
    <section>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
              Hello, {{ this.name }}
            </h1>
        </div>
      </div>
    </section>
  </div>
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
.custom {
  background: linear-gradient(to right, #5B86E5, #36D1DC)
}
</style>
