<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    let users = localStorage.getItem("users");
    if (!users) {
      console.log("hey");

      this.$store.dispatch("prepareLocal");
    } else {
      this.$store.dispatch("setUsers", JSON.parse(users));
    }
    console.log(users);
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.getIsLoggedIn;
    }
  },
  methods: {}
};
</script>

<style scoped>
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
</style>
