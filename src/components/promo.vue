<template>
<div class="promo">


  <!-- <div class="tile is-ancestor">

    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="content">
          <p class="title">Tall column</p>
          <p class="subtitle">With even more content</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
              dui porta orci, quis semper odio felis ut quam.</p>
            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi,
              fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus,
              quis faucibus libero. Quisque non semper leo.</p>
          </div>
        </div>
      </article>
    </div>
  </div> -->

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">List Promo</p>
        <p class="subtitle">With some content</p>
        <div class="content">

          --
        </div>
      </article>
    </div>
    <div class="tile is-parent is-10">
      <article class="tile is-child box">
        {{subject}} {{sender}}
        <div v-html="myHTML"></div>
        {{myHTML}}
        <p class="title">Send email Promo</p>
        <div class="content">
          <section>
            <b-field horizontal label="Subject" message="Please enter a subject">
              <b-input v-model="subject" name="subject" expanded></b-input>
            </b-field>

            <b-field horizontal label="From">
              <b-input v-model="sender" name="email" type="email" placeholder="nobody@myCRM.com" expanded></b-input>
            </b-field>
            <b-field horizontal label="Message">
              <wysiwyg v-model="myHTML" />
            </b-field>

            <b-field horizontal>
              <!-- Label left empty for spacing -->
              <p class="control">
                <button class="button is-primary">
                           Blast Email
                         </button>
              </p>
            </b-field>
          </section>
        </div>
      </article>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'promo',
  data: function() {
    return {
      datas: 'ini data',
      subject: '',
      sender: '',
      myHTML: ''

    }
  }
}
</script>


<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
