<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    let users = localStorage.getItem("users");
    let locations = localStorage.getItem("locations");
    let reviews = localStorage.getItem("reviews");

    //Check if that is any objects in the storage 
    //if it isn't, createss them and populates them with data from the vuex store
    if (!users) {
      this.$store.dispatch("prepareLocalUsers");
    } else {
      this.$store.dispatch("setUsers", JSON.parse(users));
    }

    if (!locations) {
      this.$store.dispatch("prepareLocalLocations");
    } else {
      this.$store.dispatch("setLocations", JSON.parse(locations));
    }

    if (!reviews) {
      this.$store.dispatch("prepareLocalReviews");
    } else {
      this.$store.dispatch("addReviews", JSON.parse(reviews));
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
