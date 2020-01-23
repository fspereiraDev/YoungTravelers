<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {},
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.getIsLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Arial", serif;
  font-size: 10px;
  font-weight: 100;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body.login {
  overflow-y: hidden !important;
  background-image: url("./assets/backg.jpg") !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

body.register {
  background-image: url("./assets/login-backg2.jpg") !important;
}
</style>
