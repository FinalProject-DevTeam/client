<template>
  <div class="displayCustomers">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <br>
          <br>
          <br>
          <div class="content">
            <p class="title">Customers </p>
            <CardLeftDashboard :name="nameC" :link="linkC" :data="this.sampleCustomers" />

            <br><br>
            <br><br>
            <p class="title">Transactions</p>
            <CardLeftDashboard :name="nameT" :link="linkT" :data="this.sampleTransactions" />
          </div>
        </article>
      </div>
      <div class="tile is-parent is-8">
        <article class="tile is-child box">
          <div class="contents">
            <h1 class="title is-1 customTitle">Transactions Statistic</h1>
              <PieChart />
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
.customTitle {
  text-align: center
}
</style>
