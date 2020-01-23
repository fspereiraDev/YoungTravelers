<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../assets/logo.png" id="icon" alt="User Icon" width="100px" height="200px" />
      </div>

      <!-- Login Form -->
      <form @submit.prevent="login">
        <input
          type="text"
          id="login"
          class="fadeIn second"
          name="login"
          placeholder="Username"
          v-model="email"
        />
        <input
          type="password"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="Password"
          v-model="password"
        />
        <input type="submit" class="fadeIn fourth" value="Log In" @click="login" />
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <router-link to="/register" class="underlineHover">Don't have an account? Sign up here.</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/sass/login.scss";
</style>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      console.log("Email: " + email + " & password: " + password);
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/home"))
        .catch(err => console.log(err));
    }
  }
};
</script>