<template>
<div class="login">
  <section class="hero is-info is-large">
    <div class="hero-head">
      <br><br><br>
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
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="logos tile is-parent">
              <img height="300px" src="@/assets/logologin.png" />
            </div>
          </div>
          <div class="logins tile is-parent">
            <div id="firebaseui-auth-container"></div>
          </div>
        </div>

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
      signInSuccessUrl: '/#/dashboard',
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
<style>
.hero-body {
  height: 99% !important;
  margin-top: 100px;
  padding-top: 0px !important;
  margin-bottom: 80px !important
}

body {
  height: 100% !important
}

.logos img {
  padding: 0px !important
}

.logins {
  margin-top: 80px;
  margin-left: 50px;
  border-left: 1px solid #eee
}
</style>
