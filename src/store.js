import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import swal from 'sweetalert2';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: null,
    transactions:null,
    onlyNames:null
  },
  mutations: {
    customersData (state, payload) {
      state.customers = payload
    },
    customerNames (state, payload) {
      state.onlyNames = payload
    },
    transactionData (state, payload) {
      state.transactions = payload
    }
  },
  actions: {
    inputCustomer({ commit }, payload) {
      axios.post(`http://localhost:3000/customer`, payload)

        .then(result => {
          swal(
            'Good Job',
            `${result.data.msg}`,
            'success'
          )
          router.push('/dashboard');
        })

        .catch(err => {
          console.log(err)
          swal(
            'Failed!',
            `${err.msg}`,
            'error'
          )
        })
    },

    addTransaction({ commit }, payload) {
      axios.post(`http://localhost:3000/transaction`, payload)

        .then(result => {
          swal(
            'Good Job',
            `${result.data.msg}`,
            'success'
          )
          router.push('/dashboard');
        })

        .catch(err => {
          console.log(err)
          swal(
            'Failed!',
            `${err.msg}`,
            'error'
          )
        })
    },

    deleteTransaction({ commit }, payload) {
      axios.delete(`http://localhost:3000/transaction/${payload}`)

        .then(result => {
          swal(
            'Good Job',
            `successfully removed`,
            'success'
          )
          router.push('/dashboard');
        })

        .catch(err => {
          console.log(err)
          swal(
            'Failed!',
            `${err.msg}`,
            'error'
          )
        })
    },

    getCustomers({ commit }) {
      const restaurantId = localStorage.getItem('uid')

      axios.get(`http://localhost:3000/customer`, {
        headers: {
          uid: restaurantId
        }
      })

        .then(result => {
              let datas = result.data.data
              let onlyname = []
              for (let i = 0; i < datas.length; i++) {
                onlyname.push(datas[i].name + '    id:' + datas[i].id)
              }
          commit('customerNames', onlyname)
          console.log(onlyname)
          commit('customersData', result.data.data)
        })

        .catch(err => {
          swal(
            'Failed',
            'Cannot Load',
            'error'
          )
        })
    },
    getTransactions({ commit }) {
      const restaurantId = localStorage.getItem('uid')

      axios.get(`http://localhost:3000/transaction`, {
        headers: {
          uid: restaurantId
        }
      })

        .then(result => {
          commit('transactionData', result.data.data)
        })

        .catch(err => {
          swal(
            'Failed',
            'Cannot Load',
            'error'
          )
        })
    },


  }
})
