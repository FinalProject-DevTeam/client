<template>
<div class="transactionpage">
  <div class="s">
    <div class="notification">

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <article class="tile is-child box">
              <p class="title">Add New Transaction:</p>
              <div class="content">
                <section>
                  <b-field label="Select a Name">
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
                  <div class="block">
                    <b-checkbox native-value="Nasi Goreng" v-model="menus">
                      Nasi Goreng
                    </b-checkbox>
                    <b-checkbox native-value="Ayam Goreng" v-model="menus">
                      Ayam Goreng
                    </b-checkbox>
                    <b-checkbox native-value="Udang Goreng" v-model="menus">
                      Udang Goreng
                    </b-checkbox>
                    <b-checkbox native-value="Salmon Goreng" v-model="menus">
                      Salmon Goreng
                    </b-checkbox>
                    <b-checkbox native-value="Pisang Goreng" v-model="menus">
                      Pisang Goreng
                    </b-checkbox>
                    <b-checkbox native-value="Kentang Goreng" v-model="menus">
                      Kentang Goreng
                    </b-checkbox>
                    <b-checkbox native-value="Pizza" v-model="menus">
                      Pizza
                    </b-checkbox>
                    <b-checkbox native-value="Sate" v-model="menus">
                      Sate
                    </b-checkbox>
                  </div>
                  <p class="content ">
                    <a class="button is-success" @click="addTransactions">Submit Transaction</a>
                  </p>
                </section>

              </div>
            </article>
          </article>
        </div>
        <div class="tile is-parent is-8 ">
          <article class="tile is-child box ">

            <p class="title ">data Transaction </p>
            <table class="table is-hoverable ">
              <thead>
                <tr>
                  <th><abbr title="Position ">No</abbr></th>
                  <th><abbr title="Played ">Cust. Name / id</abbr></th>
                  <th><abbr title="Drawn ">Menu</abbr></th>
                  <th><abbr title="Lost ">transaction date</abbr></th>
                  <th><abbr title="Goals against ">action </abbr></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(transaction, index) in transactions " :key="index ">
                  <th>{{index+1}} </th>
                  <td>{{transaction.customerId}}</td>
                  <td>{{transaction.itemsOrdered.toString()}}</td>
                  <td>{{transaction.createdAt}}</td>
                  <td> <span class="button ">edit</span> <span class="button is-danger is-outlined " @click='removeTransaction(transaction.id)'>delete</span></td>
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
      'customers', 'transactions', 'onlyNames'
    ]),

    // filteredDataArray() {
    //   return this.onlyNames.filter((option) => {
    //     return option
    //       .toString()
    //       .toLowerCase()
    //       .indexOf(this.name.toLowerCase()) >= 0
    //   })
    // },
  },


  created() {
    this.getCustomers();
    this.getTransactions();
  },
  methods: {
    ...mapActions([
      'inputCustomer', 'getCustomers', 'getTransactions', 'addTransaction', 'deleteTransaction'
    ]),
    addTransactions() {
      const uid = localStorage.getItem('uid');
      const newTransaction = {
        itemsOrdered: this.menus,
        restaurantId: uid,
        customerId: this.id

      }
      this.addTransaction(newTransaction)
    },
    removeTransaction(id) {
      this.deleteTransaction(id)
      console.log('successfully removed')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
