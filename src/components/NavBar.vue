<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand to="/">YoungTravelers</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/locations">Spots of Interest</b-nav-item>
          <b-nav-item to="/itineraries">Itineraries</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button to="/login" class="my-4" type="submit">Login</b-button>
          <!-- <b-button to="/login" class="my-4" type="submit" @click="logout">Logout</b-button> -->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>
                <i class="fa fa-user"></i>
                {{userInfo.name}}
              </em>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-button to="/login" @click="logout">Sign Out</b-button>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { mapState } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      users: "",
      userLog: "",
      userInfo: {}
    };
  },
  mounted() {
    // Get all users from the store
    this.users = this.getUsers;

    // Get user information from the token
    this.userLog = JSON.parse(localStorage.getItem("token"));

    // Object to receive all the user info
    this.userInfo = {
      name: "",
      country: "",
      university: "",
      course: "",
      email: "",
      password: "",
      password2: "",
      tags: "",
      is_admin: ""
    };
    // Get all information that the fake Token (comparing with the data in the store) can give from the logged user
    for (let i = 0; i < this.users.length; i++) {
      if (this.userLog.email == this.users[i].email) {
        this.userInfo = {
          name: this.users[i].name,
          country: this.users[i].country,
          university: this.users[i].university,
          course: this.users[i].course,
          email: this.users[i].email,
          password: this.users[i].password,
          password2: this.users[i].password2,
          tags: this.users[i].tags,
          is_admin: this.users[i].is_admin
        };
      }
    }
  },
  computed: mapState({
    getUsers: state => state.users
  }),
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        // this.$store.dispatch(""); !!! passar informação para o prepare local !!!!
        this.$swal({
          title: "Goodbye",
          text: "Loggin Out",
          icon: "success",
          timer: 1000
        });
        this.$router.push("/login").catch(err => {
          err;
        });
      });
    },

    isLogIn() {}
  }
};
</script>

<style scoped>
</style>