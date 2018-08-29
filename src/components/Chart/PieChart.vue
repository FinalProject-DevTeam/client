<template>
  <div class="chart">
    <div class="small">
      <h1 class="title is-3 customTitle">Total Transactions by Menu</h1>
      <line-chart :chart-data="newCollection"></line-chart>
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
      datacollection: null,
      newCollection: null
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
  watch: {
    datafood() {
      this.newCollection =  {
      labels: this.datafood,
      datasets: [{
        label: 'All Transactions in Restaurant',
        backgroundColor: ['#1786e2', '#00aaf0', '#00c8dd', '#00e0b4', '#92f088', '#f9f871', '#e84d3f', '#daa21c'],
        data: this.foodcount
      }, ]
    }
    }
  },
  created() {
    this.getTransactions();
  },
  methods: {
    ...mapActions([
      'getTransactions'
    ]),
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
