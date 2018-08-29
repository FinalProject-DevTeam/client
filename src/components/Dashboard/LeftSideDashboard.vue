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
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Top 3 Foods</p>
                <div class="content">
                  <div v-for='(data, index) in topfood.slice(0,3)' :key="index">
                    <div class="tags has-addons">
                      <span class="tag is-large">{{data.food}}</span>
                      <span class="tag is-primary is-large">{{data.count}}</span>
                    </div>
                    <hr/>
                  </div>
                </div>

              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Bottom 3 Foods</p>
                <div class="content">
                  <div v-for='(data, index) in topfood.slice(topfood.length - 3, topfood.length)' :key="index">
                    <div class="tags has-addons">
                      <span class="tag is-large">{{data.food}}</span>
                      <span class="tag is-primary is-large">{{data.count}}</span>
                    </div>
                    <hr/>
                  </div>
                </div>
              </article>
            </div>
          </div>
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
      linkT: 'transaction',
      top3: [],
      bottom3: []
    };
  },
  components: {
    CardLeftDashboard,
    PieChart
  },
  computed: {
    ...mapState([
      'sampleTransactions', 'sampleCustomers', 'topfood'
    ])
  },
  created() {
    this.getCustomers();
    this.getTransactions();
    this.top3 = this.topfood.slice(0, 3)
      let bottoms = this.topfood.slice()
      bottoms = this.topfood.splice(this.topfood.length - 3, 3)
      this.bottom3 = bottoms

      console.log(JSON.stringify(this.topfood))
      console.log('bottom', this.bottom3)
    
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
