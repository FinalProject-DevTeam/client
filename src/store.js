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
    name:'namecova',
    datafood:[],
    foodcount:[],
    topfood:[]
  },
  mutations: {
    customersData (state, payload) {
      state.customers = payload;
    },
    topFood (state, payload) {
      state.topfood = payload;
    },
    customerNames (state, payload) {
      state.onlyNames = payload;
    },
    DataFood (state, payload) {
      state.datafood = payload;
    },
    FoodCount (state, payload) {
      state.foodcount = payload;
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
      axios.post(`https://server.rika.website/customer`, payload)

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

      let { data } = await axios.get(`https://server.rika.website/customer/email/${payload.food}`, {
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
        axios.post(`https://server.rika.website/emailpromo`, msg)

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

      let { data } = await axios.get(`https://server.rika.website/customer/sms/${payload.food}`, {
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
        axios.post(`https://server.rika.website/smspromo`, dataSMS)
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
      axios.post(`https://server.rika.website/transaction`, payload)

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
      axios.put(`https://server.rika.website/transaction/${payload.id}`, payload.data)

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
      axios.delete(`https://server.rika.website/transaction/${payload}`)

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
      axios.get(`https://server.rika.website/customer`, {
        headers: {
          uid: restaurantId
        }
      })
        .then(result => {
          commit('customersData', result.data.data)
          commit('sCustomers', result.data.data.slice(0,4))
        })
        .catch(err => {
          console.log(err)
        })
    },
    getSingleCustomer({ commit }, payload) {
      axios.get(`https://server.rika.website/customer/${payload}`)
        .then(result => {
          commit('singleCustomerData', result.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getSingleTransaction({ commit }, payload) {
      axios.get(`https://server.rika.website/transaction/${payload}`)
        .then(result => {
          commit('singleTransactionData', result.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },


    async getTransactions({ commit }) {
      const restaurantId = localStorage.getItem('uid');
      let transaction = [];
      let items = [];
      let dataPopulate = await axios.get(`https://server.rika.website/populate`)

      for (let i = 0; i < dataPopulate.data.length; i++) {
        if (dataPopulate.data[i].restaurantId === restaurantId) {
          transaction.push(dataPopulate.data[i])
        }
      }

      for(let i = 0; i < transaction.length; i++){
        for (let j = 0; j < transaction[i].itemsOrdered.length; j++) {
          items.push(transaction[i].itemsOrdered[j])
        }
      }

      let nameFood = ['Nasi Goreng', 'Ayam Goreng', 'Udang Goreng', 'Salmon Goreng', 'Pisang Goreng', 'Kentang Goreng', 'Pizza', 'Sate'];
      let countFood = [];
      for (let i = 0; i < nameFood.length; i++) {
        let CountEachFood = items.filter(datum => (datum === nameFood[i]))
        countFood.push(CountEachFood.length)
      }

      let listTopFood = []
        for(let i=0; i < nameFood.length; i++){
            let obj = {}
          obj.food = nameFood[i]
          obj.count = countFood[i]
          listTopFood.push(obj)
        }
        listTopFood.sort(function(a, b){
          return b.count - a.count
        })
        // console.log(JSON.stringify(listTopFood))
      commit('topFood', listTopFood)
      commit('DataFood', nameFood)
      commit('FoodCount', countFood)
      commit('transactionData', transaction)
      commit('sTransactions', transaction.slice(0,4))
    },
    deleteCustomer({ commit }, payload) {
      // console.log("di store deletecustomer", payload)
      axios.delete(`https://server.rika.website/customer/${payload}`)

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
      axios.put(`https://server.rika.website/customer/${payload.id}`, payload.data)

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
