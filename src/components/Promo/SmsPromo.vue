<template>
<div class="smspromo">
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12">
        <article class="tile is-child box">
          <p class="title">Send SMS Promo</p>
          <div class="content">
            <section>

              <b-field horizontal label="Food Promo:">
                <b-select placeholder="FOOD" v-model='foodselected'>
                  <option value="Nasi+Goreng">Nasi Goreng</option>
                  <option value="Ayam+Goreng">Ayam Goreng</option>
                  <option value="Udang+Goreng">Udang Goreng</option>
                  <option value="Salmon+Goreng">Salmon Goreng</option>
                  <option value="Pisang+Goreng">Pisang Goreng</option>
                  <option value="Kentang+Goreng">Kentang Goreng</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Sate">Sate</option>
                </b-select>
              </b-field>

              <b-field horizontal label="SMS Body:">
                <wysiwyg v-model="content" />
              </b-field>
              <b-field horizontal>
                <!-- Label left empty for spacing -->
                <p class="control">

                  <button @click="sendSMS" class="button is-success is-medium"> <i class="fas fa-check"></i>
                    Blast SMS to Customer
                  </button>
                </p>
              </b-field>
            </section>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';

export default {
  name: 'smspromo',
  data: function() {
    return {
      content: '',
      foodselected: 'Food Promo',
    };
  },
  methods: {
    ...mapActions([
      'sendSmsPromo',
    ]),

    sendSMS() {
      const datafoodWithContent = {
        food: this.foodselected,
        content: this.content
      };
      this.sendSmsPromo(datafoodWithContent)
      this.content = '';
      this.foodselected = '';
    },
  },
};
</script>


<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
.smspromo .container {
  margin-top: 100px;
  width: 900px
}

.smspromo .tile {
  border-radius: 20px;
  /* box-shadow: 1px 1px 3px 1px #ccc; */
  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}

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
