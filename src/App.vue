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

    if (!users && !locations && !reviews) {
      this.$store.dispatch(
        "prepareLocalUsers",
        "prepareLocalLocatios",
        "prepareLocalReviews"
      );
    } else {
      this.$store.dispatch("setUsers", JSON.parse(users));
      this.$store.dispatch("setLocations", JSON.parse(locations));
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
