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
          placeholder="Nome e sobrenome"
          v-model="email"
        />
        <input
          type="email"
          id="login"
          class="fadeIn second"
          name="email"
          placeholder="Email"
          v-model="email"
        />
        <input
          type="text"
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
        <router-link
          to="/register"
          class="underlineHover"
          href="#"
        >Don't have an account? Sign up here.</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      is_admin: null
    };
  },
  methods: {
    register: function() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.router.push("/login"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
@import "../assets/sass/register.scss";
</style>