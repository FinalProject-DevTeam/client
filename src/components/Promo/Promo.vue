<template>
  <div class="promo">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-12">
          <article class="tile is-child box">
            <p class="title">Send Email Promo</p>
            <div class="content">
              <section>
                <b-field horizontal label="Subject" message="Please enter a subject">
                  <b-input v-model="subject" name="subject" expanded></b-input>
                </b-field>
                <b-field
                  label="Food Promo">
                  <b-select v-model='foodselected' expanded>
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
                <b-field horizontal label="Message">
                  <wysiwyg v-model="content" />
                </b-field>
                <b-field horizontal>
                  <!-- Label left empty for spacing -->
                  <p class="control">

                  <button @click="sendEmail" class="button is-success is-medium"> <i class="fas fa-check"></i>
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
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex';

export default {
  name: 'promo',
  data: function() {
    return {
      subject: '',
      content: '',
      datas: 'ini data',
      myHTML: '',
      foodselected: '',
    };
  },
  methods: {
    ...mapActions([
      'sendEmailPromo',
    ]),
    sendEmail() {
      const dataFoodWithMsg = {
        food: this.foodselected,
        msg: {
          subject: this.subject,
          content: this.content
        }
      };
      this.sendEmailPromo(dataFoodWithMsg)

      this.subject = '';
      this.content = '';
      this.foodselected = '';
    },
  },
};
</script>


<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
.promo .tile {
  border-radius: 30px;
  box-shadow: 3px 3px 5px 0px #ccc;
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
