<template>
<div class="login">
  <section class="hero is-info is-large">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">

          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">

      <div class="container has-text-centered">
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';

export default {
  components: {},
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/dashboard',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    }
  },
}
</script>
