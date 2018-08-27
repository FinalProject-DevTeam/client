<template>
<div class="transactionpage">
  <div class="s">
    <div class="notification">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <article class="tile is-child box">
              <p class="title">Add New Transaction</p>
              <div class="content">
                <section>
                  <b-field label="Customer Name:">
                    <b-select icon="account" v-model='id' placeholder="Select Name">
                      <option v-for="(customer, i) in customers" :value='customer.id' v-bind:key='i'>{{customer.name}}</option>
                    </b-select>
                  </b-field>
                </section>
                <section>
                  <hr color="#eee">
                  <p class="content">
                    <b>Choose Menu:</b>
                  </p>
                  <div class="columns">
                    <div class="column is-6">
                      <div class="field">
                        <b-checkbox native-value="Nasi Goreng" v-model="menus">
                          Nasi Goreng
                        </b-checkbox>
                      </div>
                      <div class="field">
                        <b-checkbox native-value="Ayam Goreng" v-model="menus">
                          Ayam Goreng
                        </b-checkbox>
                      </div>
                      <div class="field">
                        <b-checkbox native-value="Udang Goreng" v-model="menus">
                          Udang Goreng
                        </b-checkbox>
                      </div>
                      <div class="field">
                        <b-checkbox native-value="Salmon Goreng" v-model="menus">
                          Salmon Goreng
                        </b-checkbox>
                      </div>
                    </div>
                    <div class="column is-6">
                      <div class="field">
                        <b-checkbox native-value="Pisang Goreng" v-model="menus">
                          Pisang Goreng
                        </b-checkbox>
                      </div>
                      <div class="field">
                        <b-checkbox native-value="Kentang Goreng" v-model="menus">
                          Kentang Goreng
                        </b-checkbox>
                      </div>
                      <div class="field">
                        <b-checkbox native-value="Pizza" v-model="menus">
                          Pizza
                        </b-checkbox>
                      </div>
                      <div class="field">
                        <b-checkbox native-value="Sate" v-model="menus">
                          Sate
                        </b-checkbox>
                      </div>
                    </div>

                  </div>
                  <p class="content ">
                    <a class="button is-info is-medium" @click="addTransactions">Add Transaction</a>
                  </p>
                </section>

              </div>
            </article>
          </article>
        </div>
        <div class="tile is-parent is-8 ">
          <article class="tile is-child box ">

            <p class="title">List Transactions</p>
            <table class="table is-hoverable ">
              <thead>
                <tr>
                  <th><abbr title="Position ">No</abbr></th>
                  <th width="10%"><abbr title="Played ">Customer ID</abbr></th>
                  <th><abbr title="Drawn ">Menu</abbr></th>
                  <th><abbr title="Lost ">Transaction Date</abbr></th>
                  <th><abbr title="Goals against ">Action </abbr></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(transaction, index) in transactions " :key="index ">
                  <th>{{index+1}} </th>
                  <td>{{transaction.customerId}}</td>
                  <td>{{transaction.itemsOrdered.toString()}}</td>
                  <td>{{transaction.createdAt}}</td>
                  <td>
                    <div class="buttons has-addons">
                      <span class="button is-info is-selected">  <router-link :to="`/transaction/${transaction.id}`">Update</router-link></span>
                      <span class="button is-danger" @click='removeTransaction(transaction.id)'>Delete</span>
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </article>
        </div>
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
  name: 'transactionpage',
  props: {
    msg: String
  },
  data() {
    return {
      name: '',
      selected: null,
      checkboxGroup: '',
      allname: [],
      menus: [],
      id: ''
    }
  },
  computed: {
    ...mapState([
      'customers', 'transactions'
    ]),
  },
  created() {
    this.getCustomers();
    this.getTransactions();
  },
  methods: {
    ...mapActions([
      'getCustomers', 'getTransactions', 'inputTransaction', 'deleteTransaction'
    ]),
    addTransactions() {
      const uid = localStorage.getItem('uid');
      const newTransaction = {
        itemsOrdered: this.menus,
        restaurantId: uid,
        customerId: this.id
      }
      this.inputTransaction(newTransaction)
      this.getTransactions()
      this.menus = [];

    },
    removeTransaction(id) {
      this.deleteTransaction(id)
      this.getTransactions()
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr {
  border-bottom: 3px solid #eee
}

.notification .title,
.notification .subtitle,
.notification .content {
  color: #808080
}

.hide {
  visibility: hidden;
  height: 0px !important
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
