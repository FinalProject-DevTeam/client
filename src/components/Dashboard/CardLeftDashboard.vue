<template>
  <div class="card">
    <div class="card events-card">
      <header class="card-header">
        <p class="card-header-title">
          {{ name }}
        </p>
      </header>
      <div class="card-table">
        <div class="content">
          <table class="table is-fullwidth is-striped">
            <tbody>
              <tr v-for="(datum, index) in data" :key="index">
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td v-if="name === 'Customers'">{{ datum.name }}</td>
                <td v-else-if="name === 'Transactions'">Ordered : {{ datum.itemsOrdered.toString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item"><router-link :to='`/${link}`'>View All</router-link></a>
      </footer>
    </div>
  </div>
</template>

<script>


export default {
  props: ['name', 'link', 'data']
}
</script>

<style>

</style>
