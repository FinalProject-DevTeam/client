<template>
<div class="update">

  <div class="tile is-ancestor">
    <div class="tile is-parent is-9">
      <article class="tile is-child box">
        <p class="title">Update Transaction</p>
        <div class="content">
          <section>
            <b-field horizontal label="Menus:">
              <section>
                <hr color="#eee">
                <p class="content">
                </p>
                <div class="columns">
                  <div class="column is-3">
                    <div class="field">
                      <b-checkbox native-value="Nasi Goreng" v-model="editNew.itemsOrdered">
                        Nasi Goreng
                      </b-checkbox>
                    </div>
                    <div class="field">
                      <b-checkbox native-value="Ayam Goreng" v-model="editNew.itemsOrdered">
                        Ayam Goreng
                      </b-checkbox>
                    </div>
                    <div class="field">
                      <b-checkbox native-value="Udang Goreng" v-model="editNew.itemsOrdered">
                        Udang Goreng
                      </b-checkbox>
                    </div>
                    <div class="field">
                      <b-checkbox native-value="Salmon Goreng" v-model="editNew.itemsOrdered">
                        Salmon Goreng
                      </b-checkbox>
                    </div>
                  </div>
                  <div class="column is-3">
                    <div class="field">
                      <b-checkbox native-value="Pisang Goreng" v-model="editNew.itemsOrdered">
                        Pisang Goreng
                      </b-checkbox>
                    </div>
                    <div class="field">
                      <b-checkbox native-value="Kentang Goreng" v-model="editNew.itemsOrdered">
                        Kentang Goreng
                      </b-checkbox>
                    </div>
                    <div class="field">
                      <b-checkbox native-value="Pizza" v-model="editNew.itemsOrdered">
                        Pizza
                      </b-checkbox>
                    </div>
                    <div class="field">
                      <b-checkbox native-value="Sate" v-model="editNew.itemsOrdered">
                        Sate
                      </b-checkbox>
                    </div>
                  </div>

                </div>
                <!-- <div class="block">
                  <b-checkbox native-value="Nasi Goreng" v-model="editNew.itemsOrdered">
                    Nasi Goreng
                  </b-checkbox>
                  <b-checkbox native-value="Ayam Goreng" v-model="editNew.itemsOrdered">
                    Ayam Goreng
                  </b-checkbox>
                  <b-checkbox native-value="Udang Goreng" v-model="editNew.itemsOrdered">
                    Udang Goreng
                  </b-checkbox>
                  <b-checkbox native-value="Salmon Goreng" v-model="editNew.itemsOrdered">
                    Salmon Goreng
                  </b-checkbox>
                  <b-checkbox native-value="Pisang Goreng" v-model="editNew.itemsOrdered">
                    Pisang Goreng
                  </b-checkbox>
                  <b-checkbox native-value="Kentang Goreng" v-model="editNew.itemsOrdered">
                    Kentang Goreng
                  </b-checkbox>
                  <b-checkbox native-value="Pizza" v-model="editNew.itemsOrdered">
                    Pizza
                  </b-checkbox>
                  <b-checkbox native-value="Sate" v-model="editNew.itemsOrdered">
                    Sate
                  </b-checkbox>
                </div> -->
                <p class="content">
                  <a class="button is-success" @click="editTransaction()">Update Menu</a>
                </p>
              </section>
            </b-field>
          </section>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';
import axios from 'axios';


export default {
  name: 'TransactionUpdate',
  data() {
    return {
      transaction: null,
      editNew: '',
    }
  },

  created() {
    this.oneTransaction()
  },
  methods: {
    ...mapActions([
      'updateTransaction'
    ]),
    oneTransaction() {
      axios.get(`http://localhost:3000/transaction/${this.$route.params.id}`)
        .then(result => {
          this.transaction = result.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    editTransaction() {
      let dataedit = {
        id: this.$route.params.id,
        data: this.editNew
      }
      this.updateTransaction(dataedit)
    }
  },
  watch: {
    transaction() {
      this.editNew = this.transaction
    }
  }
}
</script>


<style scoped>
.tile {
  margin: 0px auto !important
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
