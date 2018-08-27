<template>
<div class="dashboardcomponent">
  <div class="container">
    <section class="info-tiles">
      <div class="tile is-ancestor has-text-centered">
        <div class="tile is-parent">
          <article class="cust tile is-child box">
            <p v-if="customers === null">Loading..</p>
            <p class="white title" v-else>{{customers.length}}</p>
            <p class="white subtitle">Customers</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="trans tile is-child box">
            <p v-if="transactions === null">Loading..</p>
            <p class="white title" v-else>{{transactions.length}}</p>
            <p class="white subtitle">Transactions</p>
          </article>
        </div>
      </div>
    </section>
  </div>
  <div class="container is-fluid">
    <LeftSideDashboard />
  </div>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';
import LeftSideDashboard from './LeftSideDashboard.vue';

export default {
  components: {
    LeftSideDashboard
  },
  computed: {
    ...mapState([
      'transactions', 'customers'
    ])
  },
  created() {
    this.getCustomers();
    this.getTransactions();
  },
  methods: {
    ...mapActions([
      'getCustomers', 'getTransactions'
    ]),
  },
};
</script>

<style >
.info-tiles {
  width: 700px;
  border-radius: 300px;
  padding-bottom: 50px;
  margin: 0px auto
}

/* .trans .tile .is-child .box {
  background: #00c8dd
} */

.trans {
  background: #63c2de;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  /* Firefox 3.5 - 3.6 */
  box-shadow: 3px 3px 5px 6px #ccc;
  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}

.cust {
  background: #20a8d8 !important;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  /* Firefox 3.5 - 3.6 */
  box-shadow: 3px 3px 5px 6px #ccc;
  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}

canvas {}

.white {
  color: #fff;
  font-weight: 700
}
</style>
