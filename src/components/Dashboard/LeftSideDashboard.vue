<template>
  <div class="displayCustomers">
    <div class="columns">
      <div class="column is-4">
        <CardLeftDashboard :name="nameC" :link="linkC" :data="this.sampleCustomers" />
        <CardLeftDashboard :name="nameT" :link="linkT" :data="this.sampleTransactions" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardLeftDashboard from './CardLeftDashboard.vue';
import { functions } from 'firebase';

export default {
  data: function() {
    return {
      nameC: 'Customers',
      nameT: 'Transactions',
      linkC: 'customer',
      linkT: 'transaction'
    };
  },
  components: {
    CardLeftDashboard,
  },
  computed: {
    ...mapState([
      'sampleTransactions', 'sampleCustomers'
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
