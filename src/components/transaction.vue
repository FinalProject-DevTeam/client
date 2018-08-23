<template>
<div class="transactionpage">
  <div class="s">
    <div class="notification">

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <article class="tile is-child box">
              <p class="title">New Transaction: </p>
              <div class="content">


                <section>
                  <p class="content"><b>Selected:</b> {{ selected }}</p>
                  <b-field label="Find customer Name">
                    <b-autocomplete rounded v-model="name" :data="filteredDataArray" placeholder="e.g. Udang goreng" icon="magnify" @select="option => selected = option">
                      <template slot="empty">No results found</template>
                    </b-autocomplete>
                  </b-field>
                </section>

                <section>
                  <hr color="#eee">
                  <p class="content">
                    <b>Choose Menu:</b>
                  </p>
                  <div class="block">
                    <b-checkbox v-model="checkboxGroup" native-value="Silver">
                      Nasi Goreng
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="Flint">
                      Ayam Goreng
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="Vane">
                      Udang Goreng
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="Vane">
                      Salmon Goreng
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="Vane">
                      Pisang Goreng
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="Vane">
                      Kentang Goreng
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="Vane">
                      Pizza
                    </b-checkbox>
                    <b-checkbox v-model="checkboxGroup" native-value="Billy">
                      Sate
                    </b-checkbox>
                  </div>
                  <p class="content">
                    <a class="button is-success">Submit Transaction</a>
                  </p>

                </section>

              </div>
            </article>
          </article>
        </div>
        <div class="tile is-parent is-8">

          <article class="tile is-child box">
            <p class="title">data Transaction </p>
            <table class="table is-hoverable">
              <thead>
                <tr>
                  <th><abbr title="Position">Transaction id</abbr></th>
                  <th><abbr title="Played">Cust. Name</abbr></th>
                  <th><abbr title="Drawn">Menu</abbr></th>
                  <th><abbr title="Lost">transaction date</abbr></th>
                  <th><abbr title="Goals against">action </abbr></th>

                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>1</th>
                  <td>Ali</td>
                  <td>Udang Goreng, Nasi Goreng</td>
                  <td>20/20/2019</td>
                  <td> <span class="button">edit</span> <span class="button is-danger is-outlined">delete</span></td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Yusuf Ss</td>
                  <td>Pizza, Kentang Goreng</td>

                  <td>12/11/1999</td>

                  <td> <span class="button">edit</span> <span class="button is-danger is-outlined">delete</span></td>
                </tr>

                <tr>
                  <th>5</th>
                  <td>Marlina</td>


                  <td>9</td>
                  <td>19/11/1201</td>

                  <td> <span class="button">edit</span> <span class="button is-danger is-outlined">delete</span></td>
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
export default {
  name: 'transactionpage',
  props: {
    msg: String
  },
  data() {
    return {
      data: [
        'Angular',
        'Angular 2',
        'Aurelia',
        'Backbone',
        'Ember',
        'jQuery',
        'Meteor',
        'Node.js',
        'Polymer',
        'React',
        'RxJS',
        'Vue.js'
      ],
      name: '',
      selected: null
    }
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
