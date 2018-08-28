<template>
  <div class="chart">
    <div class="small">
      <h1 class="title is-3 customTitle">Total Transactions by Menu</h1>
      <line-chart :chart-data="datacollection"></line-chart>
      <!-- <button @click="fillData()">Show Data</button> -->
    </div>
  </div>
</template>
<script>
import LineChart from '../../PieChart/PieChart';
import {
  mapState,
  mapActions
} from 'vuex';

export default {
  name: 'PieChart',
  data: function() {
    return {
      datacollection: null
    }
  },
  components: {
    LineChart
  },
  computed: {
    ...mapState([
      'datafood', 'foodcount'
    ]),
  },
  mounted() {
    this.datacollection = {
      labels: this.datafood,
      datasets: [{
        label: 'All Transactions in Restaurant',
        backgroundColor: ['#1786e2', '#00aaf0', '#00c8dd', '#00e0b4', '#92f088', '#f9f871', '#e84d3f', '#daa21c'],
        data: this.foodcount
      }, ]
    }
  },
  created() {
    this.getTransactions();
    this.datacollection = {
      labels: this.datafood,
      datasets: [{
        label: 'All Transactions in Restaurant',
        backgroundColor: ['#f87979', '#000', '#FF0303', '#18E103', '#FF892F'],
        data: this.foodcount
      }, ]
    }

  },
  methods: {
    ...mapActions([
      'getTransactions'
    ]),
    // fillData() {
    //   this.datacollection = {
    //     labels: this.datafood,
    //     datasets: [{
    //       label: 'All Transactions in Restaurant',
    //       backgroundColor: ['#f87979', '#FF892F', 'blue'],
    //       data: this.foodcount
    //     }, ]
    //   }
    // },
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
.customTitle {
  text-align: center
}
</style>
