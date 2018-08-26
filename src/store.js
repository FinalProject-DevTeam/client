import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import swal from 'sweetalert2';
import router from './router';
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: null,
    transactions:null,
    onlyNames:null,
    singleCustomer:null,
    singleTransaction:null,
    sampleCustomers: null,
    sampleTransactions: null,
    isLogin:null,
    uid:null,
    name:'namecova'
  },
  mutations: {
    customersData (state, payload) {
      state.customers = payload;
    },
    customerNames (state, payload) {
      state.onlyNames = payload;
    },
    transactionData (state, payload) {
      state.transactions = payload;
    },
    singleCustomerData (state, payload){
      state.singleCustomer = payload;
    },
    singleTransactionData(state, payload){
      state.singleTransaction = payload;
    },
    sCustomers(state, payload) {
      state.sampleCustomers = payload;
    },
    sTransactions(state, payload) {
      state.sampleTransactions = payload;
    },
    isLoginMutation(state, payload) {
      state.isLogin = payload;
    },
    uidMutation(state, payload) {
      state.uid = payload;
    },
    nameMutation(state, payload) {
      state.name = payload;
    },


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
          router.push('/customer');
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
    async sendEmailPromo({ commit }, payload) {
      let id = localStorage.getItem('uid');
      let email = localStorage.getItem('email')

      let { data } = await axios.get(`http://localhost:3000/customer/email/${payload.food}`, {
        headers: {
          uid: id
        }
      })


      if (data.data.length === 0) {
        swal(
          'Sorry!',
          `No one will receive this promo!`,
          'info'
        )
      }
      else {
        let msg = payload.msg;
        msg.receiver = data.data;
        msg.owneremail = email;
        axios.post(`http://localhost:3000/emailpromo`, msg)

          .then(result => {
            console.log('masuk')
            swal(
              'Good Job',
              `Your email successfully send to ${data.data.toString()}`,
              'success'
            )
            router.push('/emailpromo');
          })

          .catch(err => {
            console.log(err)
            swal(
              'Failed!',
              `Failed to send email`,
              'error'
            )
          })
      }
    },

    async sendSmsPromo({ commit }, payload) {
      let id = localStorage.getItem('uid');

      let { data } = await axios.get(`http://localhost:3000/customer/sms/${payload.food}`, {
        headers: {
          uid: id
        }
      })

      let receiver = data.data
      if (data.data.length === 0) {
        swal(
          'Sorry!',
          `No one will receive this SMS promo!`,
          'info'
        )
      }
      else {
        let content = payload.content;
        let dataSMS = {
          content:payload.content,
          AllNumber: receiver
        }
        axios.post(`http://localhost:3000/smspromo`, dataSMS)
          .then(result => {
            console.log('masuk sms')
            swal(
              'Good Job',
              `Your SMS successfully send to ${data.data.toString()}`,
              'success'
            )
            router.push('/smspromo');
          })
          .catch(err => {
            console.log(err)
            swal(
              'Failed!',
              `Failed to send sms`,
              'error'
            )
          })
      }
    },


    inputTransaction({ commit }, payload) {
      axios.post(`http://localhost:3000/transaction`, payload)

        .then(result => {
          swal(
            'Good Job',
            `${result.data.msg}`,
            'success'
          )
          router.push('/transaction');
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

    updateTransaction({ commit }, payload) {
      axios.put(`http://localhost:3000/transaction/${payload.id}`, payload.data)

        .then(result => {
          swal(
            'Good Job',
            `successfully updated`,
            'success'
          )
          router.push('/transaction');
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
          router.push('/transaction');
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
          // let sampleCustomers = [];
          // console.log(this.state.uid)
          // for(let i = 0; i < 4; i++) {
          //   sampleCustomers.push(result.data.data[i])
          // }
          commit('customersData', result.data.data)
          commit('sCustomers', result.data.data.slice(0,4))
        })
        .catch(err => {
          swal(
            'Failed',
            'Cannot Load',
            'error'
          )
        })
    },
    getSingleCustomer({ commit }, payload) {
      axios.get(`http://localhost:3000/customer/${payload}`)
        .then(result => {
          commit('singleCustomerData', result.data.data)
        })
        .catch(err => {
          swal(
            'Failed',
            'Cannot Load',
            'error'
          )
        })
    },

    getSingleTransaction({ commit }, payload) {
      axios.get(`http://localhost:3000/transaction/${payload}`)
        .then(result => {
          commit('singleTransactionData', result.data.data)
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
          // let sampleTransactions = [];
          //
          // for(let i = 0; i < 4; i++) {
          //   sampleTransactions.push(result.data.data[i])
          // }
          commit('transactionData', result.data.data)
          commit('sTransactions', result.data.data.slice(0,4))
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
      // console.log("di store deletecustomer", payload)
      axios.delete(`http://localhost:3000/customer/${payload}`)

        .then(result => {
          swal(
            'Success',
            `${result.data.msg}`,
            'success'
          );
          router.push('/customer');
        })

        .catch(err => {
          swal(
            'Failed',
            `Failed to delete customer`,
            'error'
          );
        })
    },
    updateCustomer({ commit }, payload) {
      axios.put(`http://localhost:3000/customer/${payload.id}`, payload.data)

        .then(result => {
          swal(
            'Good Job',
            `${result.data.msg}`,
            'success'
          )
          router.push('/customer')
        })

        .catch(err => {
          swal(
            'Failed',
            `Error Update Data`,
            'error'
          )
        })
    },
    logOut ({ commit }) {
      firebase.auth().signOut();
      router.push('/')
    }
  }
})
