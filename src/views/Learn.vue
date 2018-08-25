<template>
<div class="learn">
  <Nav/>

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Learn</p>
        <div class="content">
          <div class="buttons">
            <span class="button is-medium is-success">Upload to S3</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Create data Source</span>
            <span class="button is-medium is-info">Get Status Data</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Create ML Model</span>
            <span class="button is-medium is-info">Get Status ML Model</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Create Evaluation</span>
            <span class="button is-medium is-info">Get Status Evaluation</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Create Prediction</span>
            <span class="button is-medium is-info">Get Status Prediction</span>
          </div>

          <div class="buttons">
            <!-- <span class="button is-medium is-success">Create Prediction</span> -->
            <span class="button is-medium is-success">Get Prediction</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Delete data Source</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Delete ML Model</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Delete Prediction</span>
          </div>
          <div class="buttons">
            <span class="button is-medium is-success">Delete Evaluation</span>
          </div>
        </div>
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child box">
        <p class="title">Main column</p>
        <p class="subtitle">With some content</p>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import Nav from '../components/Header/Navbar.vue';


export default {
  components: {
    Nav
  },

};
</script>
<style>
html {
  background-color: #eee
}
</style>
