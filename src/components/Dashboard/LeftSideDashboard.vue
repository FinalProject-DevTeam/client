<template>
<div class="displayCustomers">

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <br>
        <br>
        <br>
        <div class="content">
          <p class="title">Customer </p>
          <CardLeftDashboard :name="nameC" :link="linkC" :data="this.sampleCustomers" />

          <br>
          <br>
          <br>
          <br>
          <p class="title">Transaction</p>
          <CardLeftDashboard :name="nameT" :link="linkT" :data="this.sampleTransactions" />
        </div>
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child box">
        <div class="contents">
          <PieChart />
        </div>
      </article>
    </div>
  </div>
  <!-- <div class="columns">
    <div class="column is-4">
      <CardLeftDashboard :name="nameC" :link="linkC" :data="this.sampleCustomers" />
      <br>
      <CardLeftDashboard :name="nameT" :link="linkT" :data="this.sampleTransactions" />
    </div>
    <div class="column is-7">
      <PieChart />
    </div>
  </div> -->
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex';
import CardLeftDashboard from './CardLeftDashboard.vue';
import PieChart from '../Chart/PieChart.vue';

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
    PieChart
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
.contens {
  margin-top: 0px !important
}

canvas {
  margin-top: 0px !important
}

.chartjs-size-monitor {
  margin-top: 0px !important
}
</style>
