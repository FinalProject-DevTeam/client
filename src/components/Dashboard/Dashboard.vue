<template>
  <div class="dashboardcomponent">
    <div class="container">
      <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
            <div class="tile is-parent">
              <article class="tile is-child box" >
                <p v-if="customers === null">Loading..</p>
                <p class="title" v-else>{{customers.length}}</p>
                <p class="subtitle">Customers</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box" >
                <p v-if="transactions === null">Loading..</p>
                <p class="title" v-else>{{transactions.length}}</p>
                <p class="subtitle">Transactions</p>
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
import { mapState, mapActions } from 'vuex';
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

<style>

</style>
