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
              <b-field horizontal label="Receiver" message="Please enter a receiver">
                <b-input v-model="receiver" name="receiver" expanded></b-input>
              </b-field>
              <b-field horizontal label="From">
                <b-input v-model="owneremail" name="email" type="email" placeholder="nobody@myCRM.com" expanded></b-input>
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
  mapState,
  mapActions
} from 'vuex';


export default {
  name: 'promo',
  data: function() {
    return {
      receiver: '',
      owneremail: '',
      subject: '',
      content: '',
      datas: 'ini data',
      myHTML: ''
    }
  },
  methods: {
    ...mapActions([
      'sendEmailPromo'

    ]),

    sendEmail() {
      const msg = {
        receiver: this.receiver,
        owneremail: this.owneremail,
        subject: this.subject,
        content: this.content
      };

      console.log('ini msg', msg)
      this.sendEmailPromo(msg)
      this.receiver = '';
      this.owneremail = '';
      this.subject = '';
      this.content = '';
    }
  }
}
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
