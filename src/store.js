import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import swal from 'sweetalert2';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: null,
  },
  mutations: {
    customersData (state, payload) {
      state.customers = payload
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
            `Failed to add customer`,
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
    deleteCustomer({ commit }, payload) {
      console.log("di store deletecustomer", payload)
      axios.delete(`http://localhost:3000/customer/${payload}`)

        .then(result => {
          swal(
            'Success',
            `${result.data.msg}`,
            'success'
          );
          router.push('/dashboard');
        })

        .catch(err => {
          swal(
            'Failed',
            `Failed to delete customer`,
            'error'
          );
        })
    }
  }
})
