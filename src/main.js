import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import firebase from 'firebase'; 
import config from './firebaseConfig';


Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        localStorage.setItem('isLogin', true);
        console.log(user )
      } else {
        localStorage.clear();
        localStorage.setItem('isLogin', false)
      }
     });
    },
  render: h => h(App)
}).$mount('#app')
